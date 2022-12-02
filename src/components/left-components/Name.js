import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useFocus } from '../hooks/useFocus';

const Header = styled.header`
color: white;
padding: 60px 20px;
padding-bottom: 0;
div{
    font-size: 2rem;
    font-weight: 500;
    width: 100%;
}
input{
    padding: 0;
    font-size: 2rem;
    font-weight: 500;
    word-wrap: break-word;
    color: white;
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
}
`
const Name = () => {
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
        isFocused ? <input type="text" autoFocus value={value} onChange={e=>setValue(e.target.value)}/> : <div>{value}</div>
       }
    </Header>
  )
}

export default Name