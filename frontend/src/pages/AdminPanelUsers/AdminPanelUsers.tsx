import {
  Button,
  Col,
  Form,
  Modal,
  Row,
  Table,
  Toast,
  Spinner,
  ToastContainer,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchData } from "../../services/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./AdminPanelUsers.css";

const AdminPanelUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [toastMessage, setToastMessage] = useState("");

  const [showUserForm, setShowUserForm] = useState(false);
  const handleCloseUserForm = () => setShowUserForm(false);
  const handleShowUserForm = () => setShowUserForm(true);

  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const handleCloseDeleteWarning = () => setShowDeleteWarning(false);
  const handleShowDeleteWarning = () => setShowDeleteWarning(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData("http://localhost:3000/api/user/all", "GET").then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  }, [users.length == 0]);

  function clearForm() {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  function addNewUser() {
    console.log("Add new user");
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      alert("Passwords do not match");
      return;
    }

    fetchData("http://localhost:3000/api/user/create", "POST", {
      username: username,
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        console.log("User added successfully");
        handleCloseUserForm();
        setUsers([]);
        setToastMessage("User added successfully");
      } else {
        console.log("Error adding user");
        alert("Error adding user");
      }
    });
  }

  function editUser() {
    console.log("Edit user");
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      alert("Passwords do not match");
      return;
    }

    if (selectedUser) {
      fetchData(
        `http://localhost:3000/api/user/update/${selectedUser["id"]}`,
        "PUT",
        {
          username: username,
          email: email,
          password: password,
        }
      ).then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log("User updated successfully");
          handleCloseUserForm();
          setUsers([]);
          setToastMessage("User updated successfully");
        } else {
          console.log("Error updating user");
          alert("Error updating user");
        }
      });
    } else {
      console.log("No user selected for editing");
      alert("No user selected for editing");
    }
  }

  function deleteUser() {
    console.log("Delete user");
    if (userToDelete) {
      fetchData(
        `http://localhost:3000/api/user/${userToDelete["id"]}`,
        "DELETE"
      ).then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log("User deleted successfully");
          setUsers([]);
          setToastMessage("User deleted successfully");
        } else {
          console.log("Error deleting user");
          alert("Error deleting user");
        }
      });
    } else {
      console.log("No user selected for deletion");
      alert("No user selected for deletion");
    }
  }

  const onAddPressed = () => {
    clearForm();
    setSelectedUser(null);
    handleShowUserForm();
    console.log("Add pressed");
  };

  const onEditPressed = (user: any) => {
    clearForm();
    setSelectedUser(user);
    console.log(selectedUser);
    setUsername(user["username"]);
    setEmail(user["email"]);
    handleShowUserForm();
    console.log("Edit pressed");
  };

  const onDeletePressed = (user: any) => {
    console.log("Delete pressed");
    setUserToDelete(user);
    handleShowDeleteWarning();
  };

  const confirmDelete = () => {
    console.log("Delete confirmed");
    handleCloseDeleteWarning();
    console.log(userToDelete);
    deleteUser();
  };

  /*
  if (!users) {
    return <div>Loading...</div>;
  }
    */
  return (
    <div id="admin-users-root">
      <p id="title">Users</p>
      {!users && (
        <div id="loading-spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      <div id="admin-users-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user["id"]}>
                <td>{user["id"]}</td>
                <td>{user["username"]}</td>
                <td>{user["email"]}</td>
                <td>{user["createdAt"]}</td>
                <td>{user["updatedAt"]}</td>
                <td>
                  <FontAwesomeIcon
                    onClick={() => onEditPressed(user)}
                    icon={faEdit}
                    className="action-icon"
                  />
                  <FontAwesomeIcon
                    onClick={() => onDeletePressed(user)}
                    icon={faTrash}
                    className="action-icon"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <button id="add-user-button" onClick={onAddPressed}>
        <FontAwesomeIcon icon={faUserPlus} className="action-icon" />
        Add New User
      </button>
      <Modal show={showUserForm} onHide={handleCloseUserForm}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedUser ? "Edit User" : "Add New User"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add form here */}
          <Form id="add-user-form">
            <Form.Group as={Row} className="mb-3" controlId="formBasicUsername">
              <Form.Label column sm="2" className="me-2">
                Username:{""}
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="off"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label column sm="2" className="me-2">
                Email:{""}
              </Form.Label>
              <Col>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label column sm="2" className="me-2">
                Password:{" "}
              </Form.Label>
              <Col>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="one-time-code"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formBasicConfirmPassword"
            >
              <Form.Label column sm="4" className="me-2">
                Confirm Password:{" "}
              </Form.Label>
              <Col>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="one-time-code"
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUserForm}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={selectedUser ? editUser : addNewUser}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDeleteWarning} onHide={handleCloseDeleteWarning}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete the user?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteWarning}>
            Close
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="middle-center">
        <Toast
          bg="success"
          show={toastMessage.length > 0}
          onClose={() => {
            setToastMessage("");
          }}
          delay={3000}
          autohide
        >
          <Toast.Body className={"text-white"}>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default AdminPanelUsers;
