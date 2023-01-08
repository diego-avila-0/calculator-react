import "./App.css";
import logoFreeCodeCamp from "./images/freecodecamp-logo.png";
import { Button } from "./components/btn";
import { Screen } from "./components/screen";
import BtnClear from "./components/btnClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState('');

  const setInputVal = (val) => {
    
    if (val === '.' && input.includes('.')) return;
    setInput(input + val);
    
  };

  const calcResult = () => {
    if (input) {
      setInput(evaluate(input));
    }else{
      alert('No hay valores para calcular.')
    }
  }

  return (
    <div className="App">
      <div className="container_logo_freecodecamp">
        <img
          src={logoFreeCodeCamp}
          alt="Logo de freecodecamp"
          className="logo_freecodecamp"
        />
      </div>
      <div className="container_calculator">
        <Screen input={input} />
        <div className="fila">
          <Button setInputVal={setInputVal}>1</Button>
          <Button setInputVal={setInputVal}>2</Button>
          <Button setInputVal={setInputVal}>3</Button>
          <Button setInputVal={setInputVal}>+</Button>
        </div>
        <div className="fila">
          <Button setInputVal={setInputVal}>4</Button>
          <Button setInputVal={setInputVal}>5</Button>
          <Button setInputVal={setInputVal}>6</Button>
          <Button setInputVal={setInputVal}>-</Button>
        </div>
        <div className="fila">
          <Button setInputVal={setInputVal}>7</Button>
          <Button setInputVal={setInputVal}>8</Button>
          <Button setInputVal={setInputVal}>9</Button>
          <Button setInputVal={setInputVal}>*</Button>
        </div>
        <div className="fila">
          <Button setInputVal={calcResult}>=</Button>
          <Button setInputVal={setInputVal}>0</Button>
          <Button setInputVal={setInputVal}>.</Button>
          <Button setInputVal={setInputVal}>/</Button>
        </div>
        <div className="fila">
          <BtnClear manageClear={() => setInput('')}>Clear</BtnClear>
        </div>
      </div>
    </div>
  );
}

export default App;
