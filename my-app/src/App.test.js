import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import { shallow } from "enzyme";

describe("App component", () => {
  it("Start with default value", () => {
    const component = shallow(<App />);
    const expectedValue = "0";
    const actualValue = component.find("div.default-value").text();
    expect(actualValue).toEqual(expectedValue);
  });
});
