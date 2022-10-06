import React from 'react';
import styled from 'styled-components';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';

const Container = styled.div`
display: flex;
align-items: stretch;
justify-content: center;
min-height: 100vh;
width: 70vw;
background-color: white;
margin: 0 auto;
`

const ResumeBuilder = () => {
  return (
   <Container>
    <LeftComponent/>
    <RightComponent/>
   </Container>
  )
}

export default ResumeBuilder