import React from 'react'
import styled from "styled-components";

const Container = styled.div`
height: 40px;
background-color: #340ec1;
color: white;
display: flex;
font-size: 13px;

`
const Content1 = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;`
const Content2 = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;`
const Subsribe = styled.div`
height: 20px;
background-color: black;
color: white;
outline: none;
display: flex;
align-items: center;
padding: 2px 13px;
border-radius: 5px;
cursor: pointer;
border: 1px solid white;

span{
    font-weight: 900
}
`

const Announcement = () => {
  return (
    <Container>
        <Content1>Free shipping on order over $100</Content1>
        <Content2>
            <Subsribe>Don't miss out.<span>Subscribe now</span></Subsribe>
        </Content2>
    </Container>
  )
}

export default Announcement