import React, { useState } from "react";
import styled from "styled-components";
import PillsRender from "../common/PillsRender";
import { useFocus } from "../hooks/useFocus";
const Container = styled.div`
  padding: 10px 20px;
  color: white;

  h3 {
    font-size: 1.8rem;
    font-weight: 500;
  }
  .add-hobbies{
    border: 1px solid rgba(255,255,255,0.5);
   padding: 10px;
   border-radius: 4px;
  }
  input{
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid #fff;
    color: white;
    margin-bottom: 10px;
  }
`;
const Hobbies = () => {
  const { isFocused, handleFocus } = useFocus();
  const [hobbies, setHobbies] = useState([]);
  const [input, setInput] = useState("");
  const handleAdd = () => {
    setHobbies((prev) => [...prev, input]);
    setInput("");
  };
  return (
    <Container>
      <h3>Hobbies</h3>
      <div className="hobbies-input">
        {hobbies.map((item,indx)=><span key={item+indx}>{item}{indx===hobbies.length -1 ? '' : ','} </span>)}
        {!isFocused ? (
          <div className="add-hobbies" onClick={()=>handleFocus(true)}>Add Hobbies</div>
        ) : (
          <>
            <PillsRender data={hobbies} />
            <div className="input">
              <label htmlFor="">Enter hobbies</label>
              <input
                type={"text"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></input>
              <button onClick={handleAdd}>Add</button>
              <button onClick={()=>handleFocus(false)}>Save</button>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Hobbies;
