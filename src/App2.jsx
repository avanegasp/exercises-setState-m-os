import React, { useState } from 'react';

const ExerciseInput = () => {
  const [inputIn, setInputIn] = useState('0');
  console.log(typeof inputIn);

  const handleChange = (e) => {
    setInputIn(e.target.value);
  };

  const num = 11;
  const inputInNumber = parseInt(inputIn);

  return (
    <div>
      <input type="text" onChange={handleChange} />

      <div>
        <p>Resultado a grados centigrados: {inputInNumber + num}</p>
      </div>
    </div>
  );
};

export default ExerciseInput;
