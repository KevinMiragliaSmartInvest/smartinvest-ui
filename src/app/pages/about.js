import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import RadioButton from "../../components/RadioButton/RadioButton";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";


export default function Search() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <Header></Header>
      <div className="main-body center">
        <RadioButton></RadioButton>
        <Input></Input>
        <Button label="Search time"></Button>
        <div>
          <Card title="Popular City 1"></Card>

        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}
