import { useState } from "react";
import './App.css';

function App() {
  const [total, setTotal] = useState('');
  const hanClick = (e) => {
    setTotal(total.concat(e.target.name))
  };

  const clear = () => {
    setTotal('')
  };

  const hanDel = () => {
    setTotal(total.slice(0, -1))
  };

  const calculate = () => {
    try {
      setTotal(eval(total).toString())
    } catch {
      setTotal('Error')
    }
  };


  return (
    <div className="App">
      <div className='container'>
        <form>
          <input type='text' value={total}></input>
        </form>
        <div className='keypad'>
          <button onClick={clear} id='clear' className='hl'>AC</button>
          <button onClick={hanDel} className='del'>DEL</button>
          <button name="/" onClick={hanClick} className="hl">&divide;</button>
          <button name="7" onClick={hanClick}>7</button>
          <button name="8" onClick={hanClick}>8</button>
          <button name="9" onClick={hanClick}>9</button>
          <button name="*" onClick={hanClick} className='hl'>&times;</button>
          <button name="4" onClick={hanClick}>4</button>
          <button name="5" onClick={hanClick}>5</button>
          <button name="6" onClick={hanClick}>6</button>
          <button name="-" onClick={hanClick} className='hl'>-</button>
          <button name="1" onClick={hanClick}>1</button>
          <button name="2" onClick={hanClick}>2</button>
          <button name="3" onClick={hanClick}>3</button>
          <button name="+" onClick={hanClick} className='hl'>+</button>
          <button name="0" onClick={hanClick}>0</button>
          <button name="." onClick={hanClick}>.</button>
          <button onClick={calculate} id='equal' className='hl'>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
