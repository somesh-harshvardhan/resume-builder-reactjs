import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DataRenderer from "./DataRenderer";
import DynamicSection from "./DynamicSection";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { IoAddCircleOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
const Container = styled.div``;
const EducationContainer = styled.div`
  margin-top: 20px;
  .course {
    width: 100%;
    padding: 20px 0px;

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
const ExperienceContainer = styled.div`
  margin-top: 20px;
  .course {
    width: 100%;
    padding: 20px 0px;

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

const WorkProjectsContainer = styled.div`
  margin-top: 20px;
  & > div {
    margin-top: 15px;
  }
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
  .project-about {
    textarea {
      height: 60px;
      width: 100%;
      resize: none;
    }
  }
  .your-contribution {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
    .contribution {
      position: relative;
    }
    .contribution:not(:first-child) {
      flex-basis: calc(100% - 25px);
      margin-top: 15px;
    }
    .close-icon {
      position: absolute;
      top: 0;
      right: 10px;
      font-size: 20px;
      visibility: hidden;
      opacity: 0;
      cursor: pointer;
    }
    .contribution:hover .close-icon {
      visibility: visible;
      opacity: 1;
    }
  }
  h3 {
    font-size: 1rem;
    font-weight: 500;
  }
  .tech-used {
    border: 1px solid #000;
    margin-top: 14px;
    border-radius: 4px;
    padding: 20px 20px;
  }
  .tech-used-pills {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 14px;
    flex-wrap: wrap;
  }
  .pill {
    padding: 5px 10px;
    border-radius: 22px;
    border: 0.8px solid #000;
  }
  .tech-used-input {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 14px;
    margin-top: 12px;
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

  const { dataProps, handleFocus } = props;
  const { data, setData } = dataProps;

  const handleAdd = () => {
    const oldData = [...data];
    oldData.push({
      heading: "Education",
      type: "education",
      value: {
        courseType,
        institution,
        place,
        from,
        till,
      },
    });
    setData([...oldData]);
    handleFocus(false);
  };
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
      <button className="add-buton" on onClick={handleAdd}>
        Add
      </button>
    </EducationContainer>
  );
};

const Experience = (props) => {
  const [designation, setDesignation] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [from, setFrom] = useState("");
  const [till, setTill] = useState("");

  const { dataProps, handleFocus } = props;
  const { data, setData } = dataProps;

  const handleAdd = () => {
    const oldData = [...data];
    oldData.push({
      heading: "Experience",
      type: "experience",
      value: {
        designation,
        company,
        location,
        from,
        till,
      },
    });
    setData([...oldData]);
    handleFocus(false);
  };
  return (
    <ExperienceContainer>
      <div className="course">
        <label>Designation : </label>
        <input
          type={"text"}
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        ></input>
      </div>
      <div className="course">
        <label>Company : </label>
        <input
          type={"text"}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        ></input>
      </div>
      <div className="course">
        <label>Place : </label>
        <input
          type={"text"}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
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
      <button className="add-buton" on onClick={handleAdd}>
        Add
      </button>
    </ExperienceContainer>
  );
};

const WorkProjects = (props) => {
  const contributionValue = {
    value: "",
  };
  const [projectTitle,setProjectTitle] = useState("");
  const [about,setAbout] = useState("");

  const [contribution, setContribution] = useState([contributionValue]);
  const [techUsed, setTechUsed] = useState([]);
  const [techInput, setTechInput] = useState("");
   
  const { dataProps, handleFocus } = props;
  const { data, setData } = dataProps;

  const handleAdd = () => {
    const oldData = [...data];
    oldData.push({
      heading: "Work Projects",
      type: "workprojects",
      value: {
        projectTitle,
        about,
       contribution,
       techUsed
      },
    });
    setData([...oldData]);
    handleFocus(false);
  };

  const handleTech = () => {
    const oldTech = [...techUsed];
    oldTech.push(String(techInput));
    setTechUsed([...oldTech]);
    setTechInput("");
  };
  const handleValueChange = (e, indx) => {
    const { value } = e.target;
    const oldContribution = [...contribution];
    oldContribution[indx] = {
      value: value,
    };
    setContribution([...oldContribution]);
  };

  const handleRemove = (indx) => {
    if (indx === 0) return;
    let oldContribution = [...contribution];
    oldContribution = oldContribution.filter((item, i) => i !== indx);
    setContribution([...oldContribution]);
  };
  return (
    <WorkProjectsContainer>
      <div className="project-title">
        <label htmlFor="">Project title : </label>
        <input type="text" value={projectTitle} onChange={e=>setProjectTitle(e.target.value)} />
      </div>
      <div className="project-about">
        <label htmlFor="">About project</label>
        <textarea value={about} onChange={e=>setAbout(e.target.value)}></textarea>
      </div>
      <h3>Your contribution</h3>
      <div className="your-contribution">
        {contribution.map((item, indx) => (
          <div className="contribution" key={indx}>
            <input
              type="text"
              value={item.value}
              onChange={(e) => handleValueChange(e, indx)}
            />
            <CgClose
              className="close-icon"
              onClick={() => handleRemove(indx)}
              style={{ display: indx === 0 && "none" }}
            />
          </div>
        ))}
        <IoAddCircleOutline
          fontSize={25}
          onClick={() =>
            setContribution((prev) => [...prev, contributionValue])
          }
          style={{
            alignSelf: "flex-end",
            marginTop: "15px",
            cursor: "pointer",
          }}
        />
      </div>
      <h3>Technology used</h3>
      <div className="tech-used">
        <div className="tech-used-pills">
          {techUsed.map((item, indx) => (
            <div key={item + indx} className="pill">
              {item}
            </div>
          ))}
        </div>
        <div className="tech-used-input">
          <input
            type="text"
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
          />
          <button onClick={handleTech}>Submit</button>
        </div>
      </div>
     <button onClick={handleAdd}>Add</button>
    </WorkProjectsContainer>
  );
};

const PersonalProjects = (props) => {
    const [projectTitle,setProjectTitle] = useState("");
    const [about,setAbout] = useState("");
  
    const [techUsed, setTechUsed] = useState([]);
    const [techInput, setTechInput] = useState("");
     
    const { dataProps, handleFocus } = props;
    const { data, setData } = dataProps;
  
    const handleAdd = () => {
      const oldData = [...data];
      oldData.push({
        heading: "Personal Projects",
        type: "personalprojects",
        value: {
          projectTitle,
          about,
         techUsed
        },
      });
      setData([...oldData]);
      handleFocus(false);
    };
  
    const handleTech = () => {
      const oldTech = [...techUsed];
      oldTech.push(String(techInput));
      setTechUsed([...oldTech]);
      setTechInput("");
    };

    return (
      <WorkProjectsContainer>
        <div className="project-title">
          <label htmlFor="">Project title : </label>
          <input type="text" value={projectTitle} onChange={e=>setProjectTitle(e.target.value)} />
        </div>
        <div className="project-about">
          <label htmlFor="">About project</label>
          <textarea value={about} onChange={e=>setAbout(e.target.value)}></textarea>
        </div>
        <h3>Technology used</h3>
        <div className="tech-used">
          <div className="tech-used-pills">
            {techUsed.map((item, indx) => (
              <div key={item + indx} className="pill">
                {item}
              </div>
            ))}
          </div>
          <div className="tech-used-input">
            <input
              type="text"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
            />
            <button onClick={handleTech}>Submit</button>
          </div>
        </div>
       <button onClick={handleAdd}>Add</button>
      </WorkProjectsContainer>
    );
  };
const layouts = {
  profile: {
    component: Profile,
  },
  education: {
    component: Education,
  },
  experience: {
    component: Experience,
  },
  workprojects: {
    component: WorkProjects,
  },
  personalprojects : {
    component : PersonalProjects
   }
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
