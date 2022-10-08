import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useFocus } from '../hooks/useFocus';

const Details =styled.div`
padding: 10px 20px;
`
const Item = styled.div`
display: flex;
align-items: stretch;
justify-content: flex-start;
margin-top: 10px;
input,span,p{
    font-size: .8rem;
    color: white;
    margin-right: 5px;
}
p{
    white-space: nowrap;
}
input{
 background-color: transparent;
 outline: none;
 border: none;
 width: 200px;
}
span{
word-wrap: break-all;
word-break: break-all;
}
`
const ContactItem = ({title,type,placeHolder})=>{
  const {isFocused,handleFocus} = useFocus();
  const [value,setValue] = useState(placeHolder);
  useEffect(()=>{
      if(!isFocused && value===""){
        setValue(placeHolder)
      }
      // eslint-disable-next-line
  },[isFocused])
  return <Item onClick={()=>handleFocus(true)} onBlur={()=>handleFocus(false)}>
      <p>{title} :</p>
      {isFocused ? <input autoFocus value={value} type={type} onChange={e=>setValue(e.target.value)}/> : <span>{value}</span>}
  </Item>
}

const Contact = () => {
    const fields = [
        {
            type : "email",
            title : "E",
            name : "Email",
            placeHolder : "Enter email"
        },
        {
            type : "tel",
            title : "P",
            name : "Phone",
            placeHolder : "Enter phone number"
        },{
            type : "text",
            title : "W",
            name : "Webiste",
            placeHolder : "Your website link"
        },
        {
            type : "text",
            title : "L",
            name : "Linked In",
            placeHolder : "Your Linked In"
        }
    ]
  return (
   <Details>
      {
        fields.map(item=><ContactItem key={item.name} type={item.type} title={item.title} placeHolder={item.placeHolder}/>)
      }
   </Details>
  )
}

export default Contact