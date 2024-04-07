import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Taste Bite</h1>
      <div>
        <h2>Are you going to Pick?</h2>
        <Link to="/pickup">
          <button>Pickup Option</button>
        </Link>
        <h2>Are you going to Delivering?</h2>
        <Link to="/delivery">
          <button>Delivery Option</button>
        </Link>
      </div>
    </div>
  );
}
