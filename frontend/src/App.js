import React from "react";
import { Route, Routes } from "react-router-dom";
//Pickups-User
import AddPickup from "./Components/Delivery/User/AddDelivery/AddPickup";
import UserPickups from "./Components/Delivery/User/Delivery/Pickups";
import UserUpdatePickup from "./Components/Delivery/User/UpdatePickup/UpdatePickup";
//Pickups-Admin
import UpdatePickup from "./Components/Delivery/Admin/UpdatePickup/UpdatePickup";
import Pickups from "./Components/Delivery/Admin/Delivery/Pickups";

//Home
import PickupHome from "./Components/Delivery/Pickup-Home";
import DeliveryHome from "./Components/Delivery/Delivery-Home";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/pickup" element={<PickupHome />} />
      <Route path="/" element={<DeliveryHome />} />

        <Route path="/add" element={<AddPickup />} />
        <Route path="/pickups" element={<Pickups />} />
        <Route path="/pickups/update/:id" element={<UpdatePickup />} />


        <Route path="/user_pickups" element={<UserPickups />} />
        <Route path="/user_pickups/update/:id" element={<UserUpdatePickup />} />



        
      </Routes>
    </div>
  );
}

export default App;
