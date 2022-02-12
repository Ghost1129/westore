import React from 'react'
import styled from "styled-components";


const Slide = () => {
  return (
    <Container>
        <Inner>
            <InnerText>
                {/* <span>25% OFF PROMOTIONAL SALE</span> */}
                <h2>SUMMER SALE</h2>
                <h3>DONT'T COMPROMISE ON STYLE! GET </h3>
                <h3>FLAT 30% OFF FOR NEW ARRIVALS</h3>
                <ProductButton>Browse Product</ProductButton>
            </InnerText>
            <InnerImage>
                <Image src={'https://i.ibb.co/K0RFBZH/model1.png'}/>
                <span></span>
            </InnerImage>
        </Inner>
    </Container>
  )
}

export default Slide

const Container = styled.div`
width: 100%;
height: 90vh;
display: flex;
overflow: hidden;
background: linear-gradient(225deg, hsla(245, 53%, 51%, 1) 15%, hsla(253, 82%, 49%, 1) 89%);`
const Inner = styled.div`
width: 100%;
display: flex;

`
const InnerText = styled.div`
color: #fff;

width: 60%;
display: flex;
flex-direction: column;
padding: 20px;
justify-content: center;
span{
    font-size: 0.7em;
    color: #5bbd9d;
    margin-left:5%;
    align-self: start;
}
h2{ align-self: center;
    font-size: 3em;
    font-weight: bold;
    position: relative;
    margin-bottom: 20px;
::before{
    content: '25% OFF PROMOTIONAL SALE';
    position: absolute;
    font-size: 0.25em;
    color: #5bbd9d;
    top: -10px;
    left: -10px;
}}
h3{ align-self: center;
    font-size: 1.5em;
padding: 10px;
}
`
const ProductButton = styled.div`

height: 50px;
background-color: #3eea65;
width:150px;
border-radius: 5px;
font-size: 1em;
color: black;
font-family: 'Montserrat', sans-serif;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
cursor: pointer;
align-self: center;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.65);

`



const InnerImage = styled.div`
width: 40%;
display: flex;
justify-content: center;
align-items: center;
span{
    width: 300px;
    height: 300px;
    position: absolute;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: -10px 10px 50px  black;
}`


const Image = styled.img`
height: 80%;
position: relative;
z-index: 1;

`

