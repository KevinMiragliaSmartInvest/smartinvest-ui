import React from "react";

import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";


export default function ManageClosed() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <div className="main-body center">
        <Input></Input>

        <Link to="/consign/title">
            <Button label="Title"></Button>
        </Link>

        
      </div>
    </main>
  );
}
