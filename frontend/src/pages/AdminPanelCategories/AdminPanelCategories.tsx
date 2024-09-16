import { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { fetchData } from "../../services/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./AdminPanelCategories.css";

const AdminPanelCategories = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const [toastMessage, setToastMessage] = useState("");

  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const handleCloseCategoryForm = () => setShowCategoryForm(false);
  const handleShowCategoryForm = () => setShowCategoryForm(true);

  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const handleCloseDeleteWarning = () => setShowDeleteWarning(false);
  const handleShowDeleteWarning = () => setShowDeleteWarning(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData("http://localhost:3000/api/algorithm/categories/all", "GET").then(
      (response) => {
        console.log(response);
        setCategories(response.data);
      }
    );
  }, [categories.length == 0]);

  const onAddPressed = () => {
    console.log("Add pressed");
  };

  const onEditPressed = (category: any) => {
    console.log("Edit pressed");
  };

  const onDeletePressed = (category: any) => {
    console.log("Delete pressed");
  };

  return (
    <div id="admin-categories-root">
      <p id="title">Categories</p>
      {!categories && (
        <div id="loading-spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      <div id="admin-categories-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category["id"]}>
                <td>{category["id"]}</td>
                <td>{category["name"]}</td>
                <td>{category["createdAt"]}</td>
                <td>{category["updatedAt"]}</td>
                <td>
                  <FontAwesomeIcon
                    onClick={() => onEditPressed(category)}
                    icon={faEdit}
                    className="action-icon"
                  />
                  <FontAwesomeIcon
                    onClick={() => onDeletePressed(category)}
                    icon={faTrash}
                    className="action-icon"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <button id="add-category-button" onClick={onAddPressed}>
        <FontAwesomeIcon icon={faAdd} className="action-icon" />
        Add New Category
      </button>
    </div>
  );
};

export default AdminPanelCategories;
