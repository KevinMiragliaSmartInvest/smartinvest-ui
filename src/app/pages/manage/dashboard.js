import React from "react";

import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import Card from "@/components/Card/Card";


export default function ManageDashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <div className="main-body center">

        <div>
          <h2>Unlisted</h2>
          <Card title="123 Main St"></Card>
        </div>

        <div>
          <h2>Listed</h2>
          <Card title="123 Main St"></Card>
          <Card title="123 Main St"></Card>
        </div>

        <div>
          <h2>Closed</h2>
          <Card title="123 Main St"></Card>
          <Card title="123 Main St"></Card>
          <Card title="123 Main St"></Card>
          <Card title="123 Main St"></Card>
        </div>
      </div>
    </main>
  );
}
