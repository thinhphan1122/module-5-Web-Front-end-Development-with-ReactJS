import { render, screen } from '@testing-library/react';
import App from './App';

import { shallow } from "enzyme";
describe("App component", () => {
  it("Start with default value", () => {
    const component = shallow(<App />);
    const defaultValue = component.find("div.default-value").text();
    expect(defaultValue).toEqual("0");
  });
});