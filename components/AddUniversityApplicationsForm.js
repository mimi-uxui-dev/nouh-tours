// components/AddUniversityApplicationsForm.js
import React, { useState } from "react";

const AddUniversityApplicationsForm = ({ studentId, onSubmit }) => {
  const [applications, setApplications] = useState([
    {
      name: "",
      specialty: "",
      preEnrollment: false,
      status: "pending",
      note: "",
    },
  ]);

  const handleChange = (index, event) => {
    const { name, value, type, checked } = event.target;
    const newApplications = [...applications];
    newApplications[index][name] = type === "checkbox" ? checked : value;
    setApplications(newApplications);
  };

  const addApplication = () => {
    setApplications([
      ...applications,
      {
        name: "",
        specialty: "",
        preEnrollment: false,
        status: "pending",
        note: "",
      },
    ]);
  };

  const removeApplication = (index) => {
    const newApplications = applications.filter((_, i) => i !== index);
    setApplications(newApplications);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(studentId, applications);
  };

  return (
    <form onSubmit={handleSubmit}>
      {applications.map((app, index) => (
        <div
          key={index}
          style={{
            marginBottom: "1rem",
            border: "1px solid #ddd",
            padding: "1rem",
          }}
        >
          <label>
            University Name:
            <input
              type="text"
              name="name"
              value={app.name}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </label>
          <label>
            Specialty:
            <input
              type="text"
              name="specialty"
              value={app.specialty}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
          <label>
            Pre-Enrollment:
            <input
              type="checkbox"
              name="preEnrollment"
              checked={app.preEnrollment}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
          <label>
            Status:
            <select
              name="status"
              value={app.status}
              onChange={(e) => handleChange(index, e)}
            >
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
          </label>
          <label>
            Note:
            <textarea
              name="note"
              value={app.note}
              onChange={(e) => handleChange(index, e)}
            />
          </label>
          <button type="button" onClick={() => removeApplication(index)}>
            Remove Application
          </button>
        </div>
      ))}
      <button type="button" onClick={addApplication}>
        Add Another Application
      </button>
      <button type="submit">Submit Applications</button>
    </form>
  );
};

export default AddUniversityApplicationsForm;
