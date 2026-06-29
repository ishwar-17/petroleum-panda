"use client";
import { FC } from "react";
import { DriverList } from "../components/list";
import DriverForm from "../components/form";

const Drivers: FC = () => {
  return (
    <div className="driver-main-container">
      <DriverList />
      <DriverForm />
    </div>
  );
};

export default Drivers;
