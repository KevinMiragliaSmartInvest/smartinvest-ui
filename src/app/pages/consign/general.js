import React from "react";

import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import ConsignmentGeneral from "@/components/ConsignmentGeneral/ConsignmentGeneral";
import axios from 'axios';

export default function ConsignGeneral() {
  /*
    let property = await axios.get({
    method: 'get',
    url: 'http://localhost:3001/property/get',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    },
    headers: {"Access-Control-Allow-Origin": "*"}
  });*/


  return (
    <main className="">
      <div className="main-body center">
        <ConsignmentGeneral/>
      </div>
    </main>
  );
}
