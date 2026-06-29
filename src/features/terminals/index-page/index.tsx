"use client";
import { FC } from "react";
import { TerminalList } from "../components/list";
import TerminalForm from "../components/form";

const Terminals: FC = () => {
  return (
    <div className="terminal-main-container">
      <TerminalList />
      <TerminalForm />
    </div>
  );
};

export default Terminals;
