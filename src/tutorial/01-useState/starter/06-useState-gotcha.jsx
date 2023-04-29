import { useState } from "react";

const UseStateGotcha = () => {
  const[value, setValue] = useState(0);
// This waits 5 second and increase the number according to the amount of clicks during that time frame
  const handleClick = () => { 
    setTimeout (()=> {
    setValue((currentState)=>{
        return currentState + 1;
    });
},3000);
    
};
  return (
    <>
      <h2>{value}</h2>
      <button className="btn"type="button" onClick={handleClick}>Increase</button>
    </>
  );
};

export default UseStateGotcha;