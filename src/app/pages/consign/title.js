import React from "react";

import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import FieldSet from "@/components/FieldSet/FieldSet";


export default function ConsignTitle() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <div className="main-body center">
        <FieldSet title="Title Information">
            <Input label="Do you have the title in your posession?"></Input>
        </FieldSet>
        <FieldSet title="Lein Information">
            <Input label="Are there any Liens on this property?"></Input>
        </FieldSet>
        <FieldSet title="Mortgage Information">
            <Input label="Is there a mortgage on this property?"></Input>
        </FieldSet>

        <Link to="/consign/pricing">
            <Button label="Pricing"></Button>
        </Link>

        
      </div>
    </main>
  );
}
