import { useState } from "react";

const Task = ({ id, content, onDelete, darkMode }) => {
  const [workDone, setDone] = useState(false);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleDone = () => {
    setDone(true);
  };

  return (
    <li
      style={{ margin: "1rem 0", boxSizing: "border-box", border: "2px solid" }}
      className={`list-group-item d-flex justify-content-between align-items-center shadow-sm p-3 ${
        darkMode ? "bg-dark text-light" : "bg-light-blue"
      } rounded`}
    >
      <span className="fw-bold">
        {workDone ? (
          <>
            <span style={{ color: "green" }} dangerouslySetInnerHTML={{ __html: "&#10004;" }}/>{" "}
            {content} - Done
          </>
        ) : (
          content
        )}
      </span>
      <div className="d-flex align-items-center">
        {!workDone && (
          <button
            className="btn btn-sm btn-outline-success me-2"
            onClick={handleDone}
          >
            Done
          </button>
        )}
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
