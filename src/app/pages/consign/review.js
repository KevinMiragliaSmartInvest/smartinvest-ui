import React from "react";

import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";


export default function ConsignReview() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <div className="main-body center">
        <Input></Input>

        <Link to="/">
            <Button label="Save"></Button>
        </Link>
        <Link to="/">
            <Button label="List this Property"></Button>
        </Link>
        
      </div>
    </main>
  );
}
