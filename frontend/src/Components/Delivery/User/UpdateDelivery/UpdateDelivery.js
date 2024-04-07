import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateDelivery() {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDelivery = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/deliveries/${id}`); // Updated to /deliveries/
        setInputs(response.data.delivery); // Updated to response.data.delivery
      } catch (error) {
        console.error("Error fetching delivery:", error);
      }
    };
    fetchDelivery();
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
      await axios.put(`http://localhost:5000/deliveries/${id}`, inputs); // Updated to /deliveries/
      alert("Delivery details updated successfully!"); // Updated alert message
      navigate("/user_deliveries"); // Updated navigation route
    } catch (error) {
      console.error("Error updating delivery:", error);
      alert("Failed to update delivery. Please try again.");
    }
  };

  return (
    <div>
      <h2>Update Delivery</h2>
      <form onSubmit={handleSubmit}>
        <label>Location:</label>
        <input type="text" name="location" value={inputs.location} onChange={handleChange} />
        <br />
        <label>Time:</label>
        <input type="text" name="time" value={inputs.time} onChange={handleChange} />
        <br />
        
        <label>Delivery Completed?:</label>
        <input type="text" name="done" value={inputs.done} onChange={handleChange} />
        <br />
        <button type="submit">Update</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default UpdateDelivery;
