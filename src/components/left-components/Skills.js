import React, { useState } from "react";
import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";
import {RiCloseCircleLine} from 'react-icons/ri'
const Container = styled.div`
  padding: 10px 20px;
  header {
    font-size: 1.8rem;
    font-weight: 500;
    color: white;
  }
`;
const SkillsWrapper = styled.div`
  .add-a-skill {
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    padding: 6px 8px;
    background-color: transparent;
    color: white;
    display: flex;
    column-gap: 5px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .add-skill-icon {
    height: 24px;
    width: 24px;
  }
  .skill-input-wrapper {
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: 8px 10px;
    color: white;
    font-size: 0.8rem;
    border-radius: 4px;
    position: relative;
    & > div:nth-child(2) {
      margin-top: 5px;
    }
    & input {
      background-color: transparent;
      border: none;
      outline: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      color: white;
      width: 200px;
    }
    & button {
      margin-top: 10px;
      padding: 2px 10px;
      color: white;
      background: transparent;
      border: 1px solid;
      border-radius: 4px;
      cursor: pointer;
    }
    .skill-input-wrapper-close{
        position: absolute;
        top: 4px;
        right: 6px;
        cursor: pointer;
    }
  }
`;
const SkillItem = styled.li`
list-style: none;
padding: 10px 0;
color: white;
cursor: pointer;
position: relative;
.bar-container{
    width: 100%;
    margin-top: 10px;
    background-color: rgba(255,255,255,.5);
    height: 8px;
}
.bar{
  background-color: rgba(255,255,255,1);
  height: 100%;
}
.remove-skill-icon{
  position: absolute;
  top: 10px;
  right: 0;
  visibility: hidden;
  opacity: 0;
}
:hover .remove-skill-icon{
    visibility: visible;
    opacity: 1;
  }
`
const Skill = ({skill,removeSkill})=>{
    const {name,rating} = skill;
    const barWidth = (rating/10) * 100;
    return <SkillItem>
           <div className="remove-skill-icon" onClick={()=>removeSkill(name)}><RiCloseCircleLine style={{height : 20}}/></div>
          <p>{name}</p>
          <div className="bar-container">
             <div className="bar" style={{width : barWidth + "%"}}>

             </div>
          </div>
    </SkillItem>
}
const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [showInputBox, setShowInputBox] = useState(false);
  const [inputSkill, setInputSkill] = useState({
    name: "",
    rating: 0,
  });

  const handleAddSkill = () => {
    const oldSkill = [...skills];
    oldSkill.push(inputSkill);
    setSkills([...oldSkill]);
    setInputSkill({
      name: "",
      rating: 0,
    });
    setShowInputBox(false)
  };
  const removeSkill = (name)=>{
    let oldSkill = [...skills];
     oldSkill = oldSkill.filter(item=>item.name !== name);
    setSkills([...oldSkill])
  }
  return (
    <Container>
      <header>Skills</header>
      <SkillsWrapper>
        {
         skills.map(skill=><Skill key={skill.name} skill={skill} removeSkill={removeSkill}/>)
        }

        { !showInputBox && (
          <div className="add-a-skill" onClick={() => setShowInputBox(true)}>
            <IoIosAddCircleOutline className="add-skill-icon" />{" "}
            <p>Add a skill</p>
          </div>
        )}

        {showInputBox && (
          <div className="skill-input-wrapper">
           <div className="skill-input-wrapper-close" onClick={()=>setShowInputBox(false)}><RiCloseCircleLine fontSize={16}/></div> 
            <div>
              <label>Enter skill name :</label>
              <input
                type={"text"}
                value={inputSkill.name}
                onChange={(e) =>
                  setInputSkill((prev) => ({ ...prev, name: e.target.value }))
                }
              ></input>
            </div>
            <div>
              <label>Entered skill rating(out of 10) :</label>
              <input
                type={"text"}
                value={inputSkill.rating}
                onChange={(e) =>
                  setInputSkill((prev) => ({ ...prev, rating: e.target.value }))
                }
              ></input>
            </div>
            <button onClick={handleAddSkill}>Add</button>
          </div>
        )}
      </SkillsWrapper>
    </Container>
  );
};

export default Skills;
