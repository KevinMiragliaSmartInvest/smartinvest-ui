import React from "react";

import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import FieldSet from "@/components/FieldSet/FieldSet";


export default function ConsignGeneral() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <div className="main-body center">


        <FieldSet title="Address">
            <Input label="Address Line 1"></Input>
            <Input label="Address Line 2"></Input>
            <Input label="City"></Input>
            <Input label="State / Province"></Input>
            <Input label="Country"></Input>
            <Input label="Postal Code"></Input>
        </FieldSet>

        <FieldSet title="Property Information">
            <Input label="Bedrooms"></Input>
            <Input label="Bathrooms"></Input>
            <Input label="Property Type"></Input>
            <Input label="HOA"></Input>
            <Input label="Year Built"></Input>
            <Input label="Size in Feet Squared"></Input>
            <Input label="Lot Size in Feet Squared"></Input>
            <Input label="Construction Materials"></Input>
            <Input label="Annual Tax Amount"></Input>
            <Input label="Centeral Heating"></Input>
            <Input label="Centeral Airconditioning"></Input>
        </FieldSet>

        <Link to="/consign/title">
            <Button label="Title"></Button>
        </Link>

        
      </div>
    </main>
  );
}
