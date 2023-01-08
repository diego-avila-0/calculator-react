import './App.css';
import logoFreeCodeCamp from './images/freecodecamp-logo.png';
import { Button } from './components/btn';
import { Screen } from './components/screen';

function App() {
  return (
    <div className="App">
      <div className='container_logo_freecodecamp'>
        <img 
        src={logoFreeCodeCamp} 
        alt="Logo de freecodecamp"
        className='logo_freecodecamp' />
      </div>
      <div className="container_calculator">
        <Screen />
        <div className="fila">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="fila">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className="fila">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className="fila">
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>
        </div>
      </div>
    </div>
  );
}

export default App;