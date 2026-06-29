"use client";
import { FC } from "react";
import { VehicleList } from "../components/list";
import VehicleForm from "../components/form";

const Vehicles: FC = () => {
  return (
    <div className="vehicle-main-container">
      <VehicleList />
      <VehicleForm />
    </div>
  );
};

export default Vehicles;
