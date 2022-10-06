import React from 'react';
import styled from 'styled-components';
import Contact from './left-components/Contact';
import Designation from './left-components/Designation';
import Name from './left-components/Name';
import Skills from './left-components/Skills';

const Container = styled.div`
flex-basis: 30%;
background-color: #25316D;
`


const LeftComponent = () => {
  return (
    <Container>
     <Name/>
     <Designation/>
     <Contact/>
     <Skills/>
    </Container>
  )
}

export default LeftComponent