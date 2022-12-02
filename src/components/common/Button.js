import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
padding: ${props=>`${props.p}`};
margin : ${props=>`${props.m}`};
color :  ${props=>`${props.color}`};
background : ${props=>props.background};
display :  ${props=>`${props.flex ?  'flex': props.display}`};
align-items :  ${props=>`${props.align}`};
justify-content :  ${props=>`${props.justify}`};
font-size :  ${props=>`${props.size}`};
border :  ${props=>`${props.border}`};
outline :  ${props=>`${props.outline}`};
border-radius : ${props=>props.bRadius};
cursor : ${props=>!!props.pointer ? 'pointer' : 'auto'};
${props=>props.styleObj};
`

const Button = ({children,m,size,color,background,p,display,flex,justify,align,border,bRadius,outline,styleObj,pointer,...rest}) => {
 const props = {
    m,size,color,background,p,display,flex,justify,align,border,outline,bRadius,pointer,styleObj
 }
  return (
    <ButtonWrapper {...props} {...rest}>{children}</ButtonWrapper>
  )
}
Button.defaultProps = {
    m : 0,
    p: 0,
    size  : '1rem',
    color : '#000',
    background : "#fff",
    flex : false,
    display : 'inline-block',
    justify : 'flex-start',
    align : 'center',
    border : '1px solid #000',
    outline : 'none',
    styleObj : {},
    bRadius : 0,
    pointer : false

}
export default Button