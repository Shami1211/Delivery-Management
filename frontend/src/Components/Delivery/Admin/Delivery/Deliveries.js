import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Deliveries = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDeliveries();
  }, []);

  const fetchDeliveries = async () => {
    try {
      const response = await axios.get("http://localhost:5000/deliveries");
      setDeliveries(response.data.deliveries); // Updated to setDeliveries
    } catch (error) {
      console.error("Error fetching deliveries:", error);
      setError("Error fetching deliveries. Please try again.");
    }
  };

  const handleDeleteDelivery = async (deliveryId) => {
    try {
      await axios.delete(`http://localhost:5000/deliveries/${deliveryId}`); // Updated to /deliveries/
      setDeliveries(deliveries.filter((delivery) => delivery._id !== deliveryId));
      alert("Delivery deleted successfully!"); // Updated alert message
    } catch (error) {
      console.error("Error deleting delivery:", error);
      alert("Error deleting delivery. Please try again.");
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Deliveries</h1>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Time</th>
            <th>Status</th> {/* Updated heading */}
            <th>Done</th> {/* Updated heading */}
            <th>Action</th> {/* Updated heading */}
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr key={delivery._id}>
              <td>{delivery.location}</td>
              <td>{delivery.time}</td>
              <td>{delivery.status}</td>
              <td>{delivery.done}</td>
              <td>
                <Link to={`/deleveries/update/${delivery._id}`}> {/* Updated route */}
                  <button>Update</button>
                </Link>
                <button onClick={() => handleDeleteDelivery(delivery._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Deliveries;
