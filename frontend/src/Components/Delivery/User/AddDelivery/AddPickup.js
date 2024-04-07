import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

function AddPickup() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    location: '',
    time: '',
  });

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
      await axios.post('http://localhost:5000/pickups/', inputs);
      alert('Pickup Added Successfully');
      navigate('/pickups');
    } catch (error) {
      console.error('Error adding pickup:', error);
      // Handle error and provide feedback to the user
    }
  };

  return (
    <div>
      <h2>Add New Pickup</h2>
      <form onSubmit={handleSubmit}>
        <label>Location:</label>
        <div>
          <label>
            <input type="radio" name="location" value="kurunegala" onChange={handleChange} required />
            Kurunegala
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="location" value="jaffna" onChange={handleChange} required />
            Jaffna
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="location" value="colombo" onChange={handleChange} required />
            Colombo
          </label>
        </div>
        <label>Time:</label>
        <div>
          <label>
            <input type="radio" name="time" value="3-8 pm" onChange={handleChange} required />
            3-8 pm
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="time" value="9-10 pm" onChange={handleChange} required />
            9-10 pm
          </label>
        </div>
        {/* Add more radio button ranges as needed */}
        <br />
        <button type="submit">Add Pickup</button>
      </form>
      <Link to="/user_pickups">
          <button>View Pickups</button>
        </Link>
    </div>
  );
}

export default AddPickup;
