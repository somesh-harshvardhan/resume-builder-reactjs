import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useFocus } from '../hooks/useFocus';

const Header = styled.header`
color: white;
padding: 10px 20px;
div{
    font-size: 1rem;
    font-weight: 400;
    width: 100%;
}
input{
    padding: 0;
    font-size: 1rem;
    font-weight: 400;
    color: white;
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
}
`
const Designation = () => {
    const {isFocused,handleFocus} = useFocus();
    const [value,setValue]=useState('Enter your name')
    useEffect(()=>{
     if(!isFocused && value === ''){
       setValue('Enter your name')
     }
     // eslint-disable-next-line
    },[isFocused])
  return (
    <Header onClick={()=>handleFocus(true)} onBlur={()=>handleFocus(false)}>
       {
        isFocused ? <input autoFocus type="text" value={value} onChange={e=>setValue(e.target.value)}/> : <div>{value}</div>
       }
    </Header>
  )
}

export default Designation