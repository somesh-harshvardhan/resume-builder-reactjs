import React from "react";
import styled from "styled-components";

const ProfileType = styled.div`
  header {
    font-size: 1.8rem;
    font-weight: 600;
  }
  p {
    font-size: 0.8rem;
  }
`;
const EducationType = styled.div`
  font-weight: 500;
  header {
    font-size: 1.8rem;
    font-weight: 600;
  }
  .course-college {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 12px;
  }
`;
const ExperienceType = styled.div`
  header {
    font-size: 1.8rem;
    font-weight: 600;
  }
  .course-college {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 12px;
  }
`;
const WorkProjectType = styled.div`
header{
    font-size: 1.8rem;
    font-weight: 600;
}
h3{
    font-weight: 600;
    font-size: 1.1rem;
}
ul{
   padding-left: 18px;
}
`
const DataRenderer = ({ item }) => {
  const { type, heading, value } = item;
  if (type === "profile") {
    return (
      <ProfileType>
        <header>{heading}</header>
        <p>{value}</p>
      </ProfileType>
    );
  }
  if (type === "education") {
    const { courseType, institution, place, from, till } = value;
    return (
      <EducationType>
        <header>{heading}</header>
        <div className="course-college">
          <p>{courseType}</p> |{" "}
          <p>
            {institution},{place}
          </p>
        </div>
        <div className="from-to">
          {from} - {till}
        </div>
      </EducationType>
    );
  }
  if (type === "experience") {
    const { designation, company, location, from, till } = value;
    return (
      <ExperienceType>
        <header>{heading}</header>
        <div className="course-college">
          <p>{designation}</p> |{" "}
          <p>
            {company},{location}
          </p>
        </div>
        <div className="from-to">
          {from} - {till}
        </div>
      </ExperienceType>
    );
  }
  if (type === "workprojects") {
    const { projectTitle, about, contribution=[], techUsed=[] } = value;
    return <WorkProjectType>
          <header>{heading}</header>
           <h3>{projectTitle}</h3>
           <p>{about}</p>
           <ul>
           {
            contribution.map(item=><li key={item}>{item.value}</li>)
           }
           </ul>
           <p>
           {
              techUsed.map((item,indx)=><span key={item+indx}>{item}, </span>)
           }
           </p>
         

    </WorkProjectType>
  }
  if (type === "personalprojects") {
    const { projectTitle, about,techUsed=[] } = value;
    return <WorkProjectType>
          <header>{heading}</header>
           <h3>{projectTitle}</h3>
           <p>{about}</p>
           <p>
           {
              techUsed.map((item,indx)=><span key={item+indx}>{item}, </span>)
           }
           </p>
    </WorkProjectType>
  }
};

export default DataRenderer;
