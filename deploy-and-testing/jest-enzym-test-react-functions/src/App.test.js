import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import { shallow } from "enzyme";

describe("App component", () => {
  it("increments count by 1 when the increment button is clicked", () => {
    const component = shallow(<App />);
    const incrementBtn = component.find("button.increment");
    incrementBtn.simulate("click");
    const text = component.find("div.counter-value").text();
    expect(text).toEqual("Count: 1");
  });
});