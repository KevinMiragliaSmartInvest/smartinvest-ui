import React from "react";

import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import UploadAndDisplayImage from "@/components/UploadAndDisplayImage/UploadAndDisplayImage";


export default function ConsignPhotos() {
  return (
      <div className="main-body center grid grid-cols-2 gap-2">
        <div className="col-span-2">
        <UploadAndDisplayImage></UploadAndDisplayImage>
        </div>
        <div></div>
        <div className="consignNavButtons">
        <Link to="/consign/review">
            <Button label="Review test"></Button>
        </Link>
        </div>
      </div>
  );
}
