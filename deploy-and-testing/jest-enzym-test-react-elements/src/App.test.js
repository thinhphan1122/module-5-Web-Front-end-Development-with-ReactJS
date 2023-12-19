import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

describe("App component", () => {
  it("Should render without errors", () => {
    const component = shallow(<App />);
    const wrapper = component.find(".app-pages");
    expect(wrapper.length).toBe(1);
  });
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
