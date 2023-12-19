import { useState } from "react";

const carList = ["Mercedes S600", "Porsche 911", "Mini Cooper"];
const colorList = ["Red", "Blue", "Green"];

function CarSelector() {
  const [selectedCar, setSelectedCar] = useState({
    car: carList[0],
    color: colorList[0],
  });

  const handleCarChange = (event) => {
    setSelectedCar((previousState) => {
      return {
        ...previousState,
        car: event.target.value,
      };
    });
  };

  const handleColorChange = (event) => {
    setSelectedCar((previousState) => {
      return {
        ...previousState,
        color: event.target.value,
      };
    });
  };

  return (
    <div>
      <h1>Selected Your Car</h1>
      <div>
        Selected car:
        <select value={selectedCar.car} onChange={handleCarChange}>
          {carList.map((car, index) => (
            <option key={index} value={car}>
              {car}
            </option>
          ))}
        </select>
      </div>
      <br></br>
      <div>
        Selected color:
        <select value={selectedCar.color} onChange={handleColorChange}>
          {colorList.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <h2>
        You selected a {selectedCar.color} - {selectedCar.car}
      </h2>
    </div>
  );
}

export default CarSelector;
