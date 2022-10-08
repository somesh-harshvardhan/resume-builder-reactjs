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
  .course-college{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 12px;
  }
`;
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
};

export default DataRenderer;
