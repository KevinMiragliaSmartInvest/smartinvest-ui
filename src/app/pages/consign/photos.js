import React from "react";

import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import UploadAndDisplayImage from "@/components/UploadAndDisplayImage/UploadAndDisplayImage";


export default function ConsignPhotos() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <div className="main-body center">
        <UploadAndDisplayImage></UploadAndDisplayImage>
        
        <Link to="/consign/review">
            <Button label="Review test"></Button>
        </Link>
      </div>
    </main>
  );
}
