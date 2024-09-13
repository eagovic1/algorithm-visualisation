import React, { useEffect } from "react";
import "./Snackbar.css"; // You'll need some styles for the snackbar

interface SnackbarProps {
  message: string;
  open: boolean;
  onClose: () => void;
}

const Snackbar = ({ message, open, onClose }: SnackbarProps) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Snackbar will disappear after 3 seconds
      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }
  }, [open, onClose]);

  if (!open) return null;

  return <div className="snackbar">{message}</div>;
};

export default Snackbar;
