import React, { useState } from "react";
import styled from "styled-components";
import PillsRender from "../common/PillsRender";
import { useFocus } from "../hooks/useFocus";
import { VscClose } from "react-icons/vsc";
const Container = styled.div`
  padding: 10px 20px;
  color: white;

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
  }
  .add-hobbies {
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
    cursor: pointer;
  }
  input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid #fff;
    color: white;
    margin-bottom: 10px;
  }
  .hobbies{
     display: flex;
     flex-wrap: wrap;
     justify-content: flex-start;
     align-items: center;
  }
  .hobbies span{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hobbies-button{
    padding: 2px 4px;
    border: 1px solid white;
    background: transparent;
    border-radius: 4px;
    color: #fff;
    margin: 0 12px 0 0;
    cursor: pointer;
  }

`;
const Hobbies = () => {
  const { isFocused, handleFocus } = useFocus();
  const [hobbies, setHobbies] = useState([]);
  const [input, setInput] = useState("");


  const handleRemove = (index,hobbies)=>{
   let arr=[],old=[...hobbies];
   for(let i=0;i<old.length;i++){
    if(index !== i) arr.push(old[i]);
   }
   setHobbies([...arr]);
  }
  const PillsComponent = ({index,...rest}) => {
   const {hobbies,showClose} = rest;
   return <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>{input}</p>
    {showClose &&  <VscClose onClick={()=>handleRemove(index,hobbies)} />}
    </div>
  };
  const handleAdd = () => {
    if(input==='') return
    setHobbies((prev) => {
     
      return [...prev,PillsComponent]
    });
   
    setInput("");
  };
  return (
    <Container>
      <h3>Hobbies</h3>
      <div className="hobbies-input">
        <div className="hobbies">
        {!isFocused && hobbies.map((Item, indx) => (
          <span key={Item + indx}>
            {<Item index={indx} hobbies={hobbies}/>}
            {indx === hobbies.length - 1 ? "" : ","}{" "}
          </span>
        ))}
        </div>
    
        {!isFocused ? (
          <div className="add-hobbies" onClick={() => handleFocus(true)}>
            Add Hobbies
          </div>
        ) : (
          <>
            <PillsRender data={hobbies} hobbies={hobbies} showClose/>
            <div className="input">
              <label htmlFor="">Enter hobbies</label>
              <input
                type={"text"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></input>
              <button className="hobbies-button" onClick={handleAdd}>Add</button>
              <button className="hobbies-button" onClick={() => handleFocus(false)}>Close</button>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Hobbies;
