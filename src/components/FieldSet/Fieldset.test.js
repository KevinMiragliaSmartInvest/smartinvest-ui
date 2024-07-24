import React from "react";
import { render } from "@testing-library/react";
import FieldSet from "./FieldSet";

describe(FieldSet, () => {

    it("FieldSet displays correct title", () => {
        const {getByText} = render(<FieldSet title="test"/>);
        const titleValue = getByText("test").textContent;
        console.log("titleValue = ", titleValue)
        expect(titleValue).toEqual("test");
    })
});