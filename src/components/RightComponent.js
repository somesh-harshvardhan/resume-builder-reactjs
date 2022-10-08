import React from 'react'
import styled from 'styled-components';
import Sections from './right-components/Sections';


const Container = styled.div`
flex-basis: 70%;
padding: 60px 40px;
`

const RightComponent = () => {
  return (
   <Container>
     <Sections/>
   </Container>
  )
}

export default RightComponent