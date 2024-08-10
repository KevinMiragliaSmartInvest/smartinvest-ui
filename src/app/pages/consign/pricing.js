import React from "react";

import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import FieldSet from "@/components/FieldSet/FieldSet";
import ConsignmentAskingPrice from "@/components/ConsignmentAskingPrice/ConsignmentAskingPrice";


export default function ConsignPricing() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <div className="main-body center">

        <ConsignmentAskingPrice></ConsignmentAskingPrice>
        
      </div>
    </main>
  );
}
