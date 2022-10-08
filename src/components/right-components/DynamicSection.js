import React from "react";
import styled from "styled-components";
import { VscAdd, VscClose } from "react-icons/vsc";
import { useFocus } from "../hooks/useFocus";
import Select from "react-select";
const Container = styled.div`
  position: relative;
  margin-top: 24px;
`;
const AddASection = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  font-size: 1.5rem;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 12px;
  margin-top: 20px;
`;
const SectionOptions = styled.dialog`
  width: 100%;
  min-height: 300px;
  position: absolute;
  border: 1px solid #000;
  padding: 10px;
  .close-dialog {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .react-select {
    margin-top: 40px;
  }
  textarea{
    width: 468px;
    height: 220px;
    margin-top: 18px;
    padding: 10px;
    font-size: 14px;
    outline: none;
  }
`;

const options = [
  {
    value: "profile",
    label: "Profile",
  },
  {
    value: "education",
    label: "Education",
  },
  {
    value: "experience",
    label: "Experience",
  },
  {
    value: "workprojects",
    label: "Work Projects",
  },
  {
    value: "personalprojects",
    label: "Personal Projects",
  },
];
const customStyles = {
    option: (props) => ({
      ...props,
      background: "white",
      color: "#000",
      "&:hover": {
        background: "#000",
        color: "white",
      },
    }),
    control: (props, state) => ({
      ...props,
      border: "1px solid #000",
      borderRadius: "0",
      outline: "none",
      boxShadow: "none",
      "&:hover": {
        boxShadow: "none",
        borderColor: "#000",
      },
    }),
  };

const DynamicSection = ({ selected, setSelected, layouts,dataProps}) => {
  const { isFocused: openDialog, handleFocus } = useFocus();

  const COMPONENT=layouts[selected.value].component;
  return (
    <Container>
      {!openDialog && (
        <AddASection onClick={() => handleFocus(true)}>
          Add a section <VscAdd />
        </AddASection>
      )}
      {openDialog && (
        <SectionOptions open={openDialog}>
          <div className="close-dialog" onClick={() => handleFocus(false)}>
            <VscClose />
          </div>
          <Select
            options={options}
            value={selected}
            onChange={(value) => setSelected(value)}
            className="react-select"
            styles={customStyles}
          />
          <COMPONENT dataProps={dataProps} handleFocus={handleFocus}/>
         
        </SectionOptions>
      )}
    </Container>
  );
};

export default DynamicSection;
