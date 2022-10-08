import React from 'react'
import styled from 'styled-components';
import { useFocus } from '../hooks/useFocus';
const Container = styled.div`
padding: 10px 20px;
color: white;

h3{
    font-size: 1.8rem;
    font-weight: 500;
}
`
const Hobbies = () => {
 const {isFocused,handleFocus} = useFocus();
  return (
    <Container>
        <h3>Hobbies</h3>
    </Container>
  )
}

export default Hobbies