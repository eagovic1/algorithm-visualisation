import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { fetchData } from "../services/fetch";

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("userData");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("userData");
      }
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    const response = await fetchData("http://localhost:3000/api/user/login", "POST", {
      username,
      password,
    });
    if (response.status === 200) {
      setUser(response.data);
      localStorage.setItem("userData", JSON.stringify(response.data));
      return true;
    }
    return false;
  };

  const logout = async () => {
    await fetchData("http://localhost:3000/api/user/logout", "POST", {});
    setUser(null);
    localStorage.removeItem("userData");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
