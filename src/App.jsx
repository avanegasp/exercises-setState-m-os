import { useState } from 'react';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState(0);

  return (
    <>
      <div>
        <h1>Vite + React</h1>

        <input
          type="text"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />

        <div>{inputText}</div>
      </div>
    </>
  );
};

export default App;
