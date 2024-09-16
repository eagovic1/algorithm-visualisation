import { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { fetchData } from "../../services/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./AdminPanelAlgorithms.css";

const AdminPanelAlgorithms = () => {
  const [algorithms, setAlgorithms] = useState<any>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<any>(null);

  const [toastMessage, setToastMessage] = useState("");

  const [showAlgorithmForm, setShowAlgorithmForm] = useState(false);
  const handleCloseAlgorithmForm = () => setShowAlgorithmForm(false);
  const handleShowAlgorithmForm = () => setShowAlgorithmForm(true);

  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const handleCloseDeleteWarning = () => setShowDeleteWarning(false);
  const handleShowDeleteWarning = () => setShowDeleteWarning(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData("http://localhost:3000/api/algorithm//all", "GET").then(
      (response) => {
        console.log(response);
        setAlgorithms(response.data);
      }
    );
  }, [algorithms.length == 0]);

  const onAddPressed = () => {
    console.log("Add pressed");
  };

  const onEditPressed = (algorithm: any) => {
    console.log("Edit pressed");
  };

  const onDeletePressed = (algorithm: any) => {
    console.log("Delete pressed");
  };

  return (
    <div id="admin-algorithms-root">
      <p id="title">Algorithms</p>
      {!algorithms && (
        <div id="loading-spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      <div id="admin-algorithms-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Key</th>
              <th>Complexity</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {algorithms.map((algorithm: any) => (
              <tr key={algorithm["id"]}>
                <td>{algorithm["id"]}</td>
                <td>{algorithm["name"]}</td>
                <td>{algorithm["category"]["name"]}</td>
                <td>{algorithm["key"]}</td>
                <td>
                  {algorithm["complexity"] ? algorithm["complexity"] : "null"}
                </td>
                <td>{algorithm["createdAt"]}</td>
                <td>{algorithm["updatedAt"]}</td>
                <td>
                  <FontAwesomeIcon
                    onClick={() => onEditPressed(algorithm)}
                    icon={faEdit}
                    className="action-icon"
                  />
                  <FontAwesomeIcon
                    onClick={() => onDeletePressed(algorithm)}
                    icon={faTrash}
                    className="action-icon"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <button id="add-algorithm-button" onClick={onAddPressed}>
        <FontAwesomeIcon icon={faAdd} className="action-icon" />
        Add New Algorithm
      </button>
    </div>
  );
};

export default AdminPanelAlgorithms;
