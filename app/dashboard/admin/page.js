"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]); // Original list of users
  const [filteredUsers, setFilteredUsers] = useState([]); // Filtered list of users
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.API}/users`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        // mode: "no-cors",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await res.json();
      const students = data.filter((user) => user.role !== "admin");
      setUsers(students);
      setFilteredUsers(students);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.fullName.toLowerCase().includes(searchQuery) ||
        user.email.toLowerCase().includes(searchQuery)
    );
    setFilteredUsers(filtered);
  };

  const handleDelete = async (userId) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to delete user.");
      }

      toast.success("User deleted successfully");
      fetchData(); // Refresh the data after deletion
    } catch (error) {
      console.error("Failed to delete user:", error);
      toast.error("Failed to delete user");
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <input
        type="text"
        placeholder="Search users..."
        onChange={handleSearch}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user._id}>
              {user.fullName} - {user.email}
              <button onClick={() => handleDelete(user._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
