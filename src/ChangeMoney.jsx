import React, { useState } from 'react';

const Euro = () => {
  const [EuroMoney, setEuroMoney] = useState(0);

  const convertionMoney = (e) => {
    setEuroMoney(e.target.value);
  };

  const euroMoneyInt = parseInt(EuroMoney);
  const dollars = 2;

  return (
    <div>
      <label htmlFor="">Euros to Dolars</label>
      <input type="text" onChange={convertionMoney} />

      <div>
        <p>How many Dollars is it?: {euroMoneyInt * dollars} </p>
      </div>
    </div>
  );
};

export default Euro;
