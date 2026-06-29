"use client";
import { FC } from "react";
import { HubList } from "../components/list";
import HubForm from "../components/form";

const Hubs: FC = () => {
  return (
    <div className="hub-main-container">
      <HubList />
      <HubForm />
    </div>
  );
};

export default Hubs;
