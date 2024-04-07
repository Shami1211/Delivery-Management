import React from "react";
import { Route, Routes } from "react-router-dom";
//Pickups-User
import AddPickup from "./Components/PickUp/User/AddDelivery/AddPickup";
import UserPickups from "./Components/PickUp/User/Delivery/Pickups";
import UserUpdatePickup from "./Components/PickUp/User/UpdatePickup/UpdatePickup";
//Pickups-Admin
import UpdatePickup from "./Components/PickUp/Admin/UpdatePickup/UpdatePickup";
import Pickups from "./Components/PickUp/Admin/Delivery/Pickups";

//Home
import PickupHome from "./Components/PickUp/Pickup-Home";
import DeliveryHome from "./Components/Delivery/Delivery-Home";
import MainHome from "./Components/Delivery/Main-Home";

//Delevery-User
import AddDelivery from "./Components/Delivery/User/AddDelivery/AddDelivery";
import UserDelevry from "./Components/Delivery/User/Delivery/Deliveries";
import UserUpdateDelivery from "./Components/Delivery/User/UpdateDelivery/UpdateDelivery";
//Pickups-Admin
import UpdateDelivery from "./Components/Delivery/Admin/UpdateDelivery/UpdateDelivery";
import Deliveries from "./Components/Delivery/Admin/Delivery/Deliveries";


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<MainHome />} />
      <Route path="/pickup" element={<PickupHome />} />
      <Route path="/delivery" element={<DeliveryHome />} />
         
         {/* Pickup-user*/}
        <Route path="/add" element={<AddPickup />} />
        <Route path="/user_pickups" element={<UserPickups />} />
        <Route path="/user_pickups/update/:id" element={<UserUpdatePickup />} />
       
         {/* Pickup-admin*/}
         <Route path="/pickups" element={<Pickups />} />
         <Route path="/pickups/update/:id" element={<UpdatePickup />} />

        {/* Pickup-user*/}
        <Route path="/add-delivery" element={<AddDelivery />} />
        <Route path="/user_deliveries" element={<UserDelevry />} />
        <Route path="/user_deliveries/update/:id" element={<UserUpdateDelivery />} />
        
        {/* Delivery-admin*/}
        <Route path="/deliveries" element={<Deliveries />} />
       <Route path="/deleveries/update/:id" element={<UpdateDelivery />} />

      </Routes>
    </div>
  );
}

export default App;
