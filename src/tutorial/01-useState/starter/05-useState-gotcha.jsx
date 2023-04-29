import { useState } from "react";

const UseStateGotcha = () => {
  const[value, setValue] = useState(0);

  const handleClick = () => { 
    // setValue(value + 1);
    //This way, the current variable is taking the same value of the value variable, instead of showing one more number.
    setValue((currentState)=>{
      const newState = currentState + 1
      console.log(currentState);
      return newState;
    } );
  };
  return (
    <>
      <h2>{value}</h2>
      <button className="btn"type="button" onClick={handleClick}>Increase</button>
    </>
  );
};

export default UseStateGotcha;
