import React from "react";

import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import FieldSet from "@/components/FieldSet/FieldSet";


export default function ConsignPricing() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <div className="main-body center">
      <FieldSet title="Asking Price">
            <Input label="Asking Price"></Input>
        </FieldSet>
        <Link to="/consign/photos">
            <Button label="Photos"></Button>
        </Link>

        
      </div>
    </main>
  );
}
