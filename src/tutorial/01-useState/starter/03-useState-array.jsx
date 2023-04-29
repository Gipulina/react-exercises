import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = () =>{ }
  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const {id,name} = person;
        return (
        <div key={id}>
          <h4>{name}</h4>
          <button type="button" className="btn">remove</button>
          </div>
      );
      })}
      <h2>useState array example</h2>
      <button className="btn" type="button" style={{margin:'2rem'}} onClick={clearAllItems}>clear items</button>
    </div>
  );
};

export default UseStateArray;
