import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import styled from "styled-components";
import DataRenderer from "./DataRenderer";
import DynamicSection from "./DynamicSection";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Container = styled.div``;
const EducationContainer = styled.div`
  margin-top: 20px;
  .course {
    width: 100%;
    padding: 20px 10px;

    label {
      font-size: 1rem;
      font-weight: 500;
    }
    input[type="text"] {
      border: none;
      border-bottom: 1px solid #000;
      outline: none;
      width: 100%;
    }
    &:last-of-type {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .course-from {
      display: flex;
      align-items: stretch;
      justify-content: center;

      input[type="month"] {
        outline: none;
      }
    }
    .course-end {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      input[type="month"] {
        outline: none;
      }
    }
  }
`;

const Profile = (props) => {
  const { dataProps, handleFocus } = props;
  const { setData, data } = dataProps;
  const [value, setValue] = useState("");
  const handleData = () => {
    const oldData = [...data];
    oldData.push({
      heading: "Profile",
      value: value,
      type: "profile",
    });
    setData([...oldData]);
    handleFocus(false);
  };
  return (
    <>
      {" "}
      <textarea value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleData}>Add</button>
    </>
  );
};

const Education = (props) => {
  const [courseType, setCourseType] = useState("");
  const [institution, setInstitution] = useState("");
  const [place, setPlace] = useState("");
  const [from, setFrom] = useState("");
  const [till, setTill] = useState();

  const  {dataProps,handleFocus} = props;
  const {data,setData} = dataProps;

  const handleAdd = ()=>{
    const oldData = [...data];
    oldData.push({
        heading : "Education",
        type : 'education',
        value : {
            courseType,institution,place,from,till
        }
        
    })
    setData([...oldData]);
    handleFocus(false)
  }
  return (
    <EducationContainer>
      <div className="course">
        <label>Course : </label>
        <input
          type={"text"}
          value={courseType}
          onChange={(e) => setCourseType(e.target.value)}
        ></input>
      </div>
      <div className="course">
        <label>Institution/College/School : </label>
        <input
          type={"text"}
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
        ></input>
      </div>
      <div className="course">
        <label>Place : </label>
        <input
          type={"text"}
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        ></input>
      </div>
      <div className="course">
        <div className="course-from">
          <label>From : </label>
          <input
            type={"month"}
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className="course-end">
          <label>End : </label>
          <input
            type={"month"}
            value={till}
            onChange={(e) => setTill(e.target.value)}
          />
          <div>
            <input type={"checkbox"} /> Currently work here
          </div>
        </div>
      </div>
      <button className="add-buton" on onClick={handleAdd}>Add</button>
    </EducationContainer>
  );
};

const layouts = {
  profile: {
    component: Profile,
  },
  education: {
    component: Education,
  },
};
const Sections = () => {
  const [selected, setSelected] = useState({
    value: "profile",
    label: "Profile",
  });
  const [data, setData] = useState([]);
  useEffect(() => {}, [selected]);
  const dataProps = { data, setData };
  return (
    <Container>
      {data.map((item, indx) => (
        <DataRenderer key={item.type + indx} item={item} />
      ))}
      <DynamicSection
        setSelected={setSelected}
        selected={selected}
        layouts={layouts}
        dataProps={dataProps}
      />
    </Container>
  );
};

export default Sections;
