import React, { useState } from 'react';
import './App.css';
export default function Calculator() {
  const [display, setDisplay] = useState('');
  const [selectvalue, setSelectvalue] = useState('');

  const handleClick = (value) => {
    console.log('value', value);
    setDisplay(display + '' + value);
  };
  const reset = () => {
    setDisplay(0);
  };
  const handleOpration = (value) => {
    console.log('value', value);
    setSelectvalue(value);
    setDisplay(display + '' + value);
  };
  const handleTotal = () => {
    const result = display
      .split(selectvalue)
      .map(Number)
      .reduce((acc, cur) => {
        console.log('acc', acc);
        console.log('cur', cur);
        switch (selectvalue) {
          case '+':
            return acc + cur;
          case '-':
            return acc - cur;
          case '*':
            return acc * cur;
          case '/':
            return acc / cur;
          case '%':
            return (acc % cur) / 100;
          default:
            return 0;
        }
      });

    setDisplay(result);
  };

  return (
    <div>
      <>
        <body>
          <div className="calc-container">
            <div className="display-screen-cont">
              <div className="display-screen"> {display} </div>
            </div>
            <button className="btn btn-top" onClick={reset}>
              AC
            </button>
            <button
              className="btn btn-top"
              onClick={() => handleOpration('+/-')}
            >
              +/-
            </button>
            <button className="btn btn-top" onClick={() => handleOpration('%')}>
              %
            </button>
            <button
              className="btn btn-side"
              onClick={() => handleOpration('/')}
            >
              ÷
            </button>
            <button
              className="btn btn-side"
              onClick={() => handleOpration('*')}
            >
              x
            </button>
            <button
              className="btn btn-side"
              onClick={() => handleOpration('-')}
            >
              -
            </button>
            <button className="btn btn-side" onClick={() => handleTotal()}>
              +
            </button>
            <button className="btn btn-side" onClick={handleTotal}>
              =
            </button>
            <div className="numbers">
              <button className="btn" onClick={() => handleClick(7)}>
                7
              </button>
              <button className="btn" onClick={() => handleClick(8)}>
                8
              </button>
              <button className="btn" onClick={() => handleClick(9)}>
                9
              </button>
              <button className="btn" onClick={() => handleClick(4)}>
                4
              </button>
              <button className="btn" onClick={() => handleClick(5)}>
                5
              </button>
              <button className="btn" onClick={() => handleClick(6)}>
                6
              </button>
              <button className="btn" onClick={() => handleClick(1)}>
                1
              </button>
              <button className="btn" onClick={() => handleClick(2)}>
                2
              </button>
              <button className="btn" onClick={() => handleClick(3)}>
                3
              </button>
              <button
                className="btn btn-primary1"
                onClick={() => handleClick(0)}
              >
                0
              </button>
              <button className="btn" onClick={() => handleClick('.')}>
                .
              </button>
            </div>
          </div>
        </body>
      </>
    </div>
  );
}
