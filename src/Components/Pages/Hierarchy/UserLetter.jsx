import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

import "../../Styles/UserLetter.css";

const UserLetter = () => {
  // const location = useLocation();
  // const { fileUrl } = location.state;
  const navigate = useNavigate();

  const designations = ["General", "Colonel", "Major", "Captain", "Lieutenant"];

  const [selectedDesignation, setSelectedDesignation] = useState("");
  const [remark, setRemark] = useState("");
  const [remarks, setRemarks] = useState({});

  const handleCheckboxChange = (designation) => {
    setSelectedDesignation(designation);
    setRemark(remarks[designation] || "");
  };

  const handleInputChange = (ev) => {
    setRemark(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const remarkData = {
      designation: selectedDesignation,
      remark: remark,
    };

    fetch("http://localhost:4002/api/remark", {
      method: "POST",
      body: JSON.stringify(remarkData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setRemarks((prevRemarks) => ({
          ...prevRemarks,
          [selectedDesignation]: remark,
        }));
        setSelectedDesignation("");
        setRemark("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = (designation) => {
    fetch(`http://localhost:4002/api/remark/${designation}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Deleted:", data);
        setRemarks((prevRemarks) => {
          const updatedRemarks = { ...prevRemarks };
          delete updatedRemarks[designation];
          return updatedRemarks;
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Container fluid className="view-letter-container">
      <Row>
        <Col xs={12} className="text-left">
          <FaTimes
            style={{ cursor: "pointer", fontSize: "24px", margin: "10px" }}
            onClick={() => navigate("/letters")}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="content-container">
          <div className="iframe-container">
            <iframe
              // src={fileUrl}
              style={{
                width: "100%",
                height: "90vh",
                border: "none",
              }}
              title="file-viewer"
            ></iframe>
          </div>
          <div className="remarks-container">
            <div>
              <h2>Remarks:</h2>
            </div>
            <div className="designations-container">
              {designations.map((designation) => (
                <div key={designation} className="designation-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedDesignation === designation}
                      onChange={() => handleCheckboxChange(designation)}
                    />
                    {designation}
                  </label>
                  {selectedDesignation === designation && (
                    <form onSubmit={handleSubmit} className="remarks-form">
                      <input
                        type="text"
                        value={remark}
                        onChange={handleInputChange}
                        placeholder={`Enter remark for ${designation}`}
                      />
                      <button type="submit">Submit</button>
                    </form>
                  )}
                  {remarks[designation] && (
                    <div className="remark-container">
                      <div className="remark-display">
                        {remarks[designation]}
                      </div>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(designation)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserLetter;
