import React from 'react'
import styled from 'styled-components'

const PillsContainer = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: flex-start;
flex-wrap: wrap;
gap: 12px;
margin-bottom: 20px;
`
const Pill = styled.div`
padding: 2px 6px;
font-size: 1rem;
font-weight: 500;
background-color: transparent;
color: white;
border: 1px solid rgba(255,255,255,0.8);
border-radius: 22px;
`
const PillsRender = ({data=[],cb=()=>{}}) => {
  return (
    <PillsContainer>
    {
        data.map((item,indx)=><Pill key={item+indx}>{item}</Pill>)
    }
    </PillsContainer>
  )
}

export default PillsRender