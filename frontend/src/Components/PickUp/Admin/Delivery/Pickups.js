import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pickups = () => {
  const [pickups, setPickups] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPickups();
  }, []);

  const fetchPickups = async () => {
    try {
      const response = await axios.get("http://localhost:5000/pickups");
      setPickups(response.data.pickups);
    } catch (error) {
      console.error("Error fetching pickups:", error);
      setError("Error fetching pickups. Please try again.");
    }
  };

  const handleDeletePickup = async (pickupId) => {
    try {
      await axios.delete(`http://localhost:5000/pickups/${pickupId}`);
      setPickups(pickups.filter((pickup) => pickup._id !== pickupId));
      alert("Pickup deleted successfully!");
    } catch (error) {
      console.error("Error deleting pickup:", error);
      alert("Error deleting pickup. Please try again.");
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Pickups</h1>
      <table>
        <thead>
          <tr>
            <th>Location..</th>
            <th>Time..</th>
            <th>Admin Order Status..</th>
            <th>User Pickup Status..</th>
            <th>Action..</th>
          </tr>
        </thead>
        <tbody>
          {pickups.map((pickup) => (
            <tr key={pickup._id}>
              <td>{pickup.location}</td>
              <td>{pickup.time}</td>
              <td>{pickup.status}</td>
              <td>{pickup.done}</td>
              <td>
                <Link to={`/pickups/update/${pickup._id}`}>
                  <button>Update</button>
                </Link>
                <button onClick={() => handleDeletePickup(pickup._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pickups;
