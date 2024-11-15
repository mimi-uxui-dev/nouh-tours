// pages/admin/add-applications.js
import React from "react";
import AddUniversityApplicationsForm from "../../components/AddUniversityApplicationsForm";

const AddApplicationsPage = ({ studentId }) => {
  const handleFormSubmit = async (studentId, applications) => {
    try {
      const response = await fetch(`/api/students/${studentId}/applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ applications }),
      });

      if (response.ok) {
        alert("Applications added successfully!");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the applications.");
    }
  };

  return (
    <div>
      <h1>Add University Applications</h1>
      <AddUniversityApplicationsForm
        studentId={studentId}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default AddApplicationsPage;
