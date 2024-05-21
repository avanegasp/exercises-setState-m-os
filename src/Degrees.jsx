import React, { useState } from 'react';

const Degrees = () => {
  const [Celsius, setCelsius] = useState(0);

  const convertionDegrees = (e) => {
    setCelsius(e.target.value);
  };

  const celsiusEvent = parseInt(Celsius);
  const fahrenheit = (9 / 5) * celsiusEvent;
  const staticNumber = 32;

  return (
    <div>
      <h3>Degrees Celsius to Fahrenheit</h3>
      <label htmlFor="">Celsius: </label>
      <input type="text" onChange={convertionDegrees} />

      <div>
        <p>Fahrenjeit: {fahrenheit + staticNumber}</p>
      </div>
    </div>
  );
};

export default Degrees;
