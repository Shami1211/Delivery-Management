import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdatePickup() {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPickup = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/pickups/${id}`);
        setInputs(response.data.pickup);
      } catch (error) {
        console.error("Error fetching pickup:", error);
      }
    };
    fetchPickup();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/pickups/${id}`, inputs);
      alert("Pickup details updated successfully!");
      navigate("/pickups"); // Navigate to the desired route
    } catch (error) {
      console.error("Error updating pickup:", error);
      alert("Failed to update pickup. Please try again.");
    }
  };

  return (
    <div>
      <h2>Update Pickup</h2>
      <form onSubmit={handleSubmit}>
        <label>Location:</label>
        <input type="text" name="location" value={inputs.location} onChange={handleChange} />
        <br />
        <label>Time:</label>
        <input type="text" name="time" value={inputs.time} onChange={handleChange} />
        <br />
        <label>Status:</label>
        <input type="text" name="status" value={inputs.status} onChange={handleChange} />
        <br />
        <button type="submit">Update</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default UpdatePickup;
