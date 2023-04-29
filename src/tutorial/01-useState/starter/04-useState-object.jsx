import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
  //Aca ingreso la información pero como objeto
  name:'peter',
  age: 24,
  hobby:'read books'
  })

  // const [name, setName] = useState("peter");
  // const [age, setAge] = useState(25);
  // const [hobbie, setHobbie] = useState("read books");
  const displayPerson = () =>{
    setPerson({...person, name:'susan'})
    // setName('Jhon')
    // setAge(23)
    // setHobbie('Painting')
  }
  const displayPersonTwo = () => {
    setPerson({name:'jhon', age: 25, hobby:'painting'})
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys : </h4>
      <h3>{person.hobbie}</h3>
      <button className="btn" onClick={displayPerson}>Next Person</button>
      <button className="btn" onClick={displayPersonTwo}>Next Person</button>
    </>
  );
};

export default UseStateObject;
