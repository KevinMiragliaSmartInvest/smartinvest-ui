import React from "react";

import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import Property from "@/components/Property/Property";


export default function ListedOverview() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <div className="main-body center" id="container">


      <h2>To Do Items</h2>
      <ul> <li>Documents to sign</li> </ul>
      <h2>Roadmap</h2>
        <ul>
          <li>List you property on MLS</li>
          <li>Schedule Open Houses</li>
          <li>Adjust Asking Price</li>
          <li>Track Offers</li>
          <li>Accept Offer</li>
          <li>Sign Sales Agreement</li>
          <li>Inspection
            <ul>
            <li>Schedule</li>  
            <li>Recieve Inspection Report</li>  
            <li>Address Items</li>  
            <li>Buyer Signoff</li>  
            </ul>            
          </li>
          <li>Appraisal
            <ul>
            <li>Schedule</li>  
            <li>Recieve Appraisal Report</li>  
            <li>Address Appraisal Concerns</li>
 
            </ul>            
          </li>
          <li>Final walkthrough
            <ul>
            <li>Schedule</li>  
            <li>Conduct final walkthrough</li>
            <li>Buyer Signoff</li>  

            </ul>            
          </li>
          <li>Final walkthrough
            <ul>
            <li>Schedule</li>  
            <li>Conduct</li>
            </ul>            
          </li>
        </ul>
      </div>
    </main>
  );
}
