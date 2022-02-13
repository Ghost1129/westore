import React from 'react'
import styled from 'styled-components'




const CategoryItem = ({item}) => {
    
  return (
    <Container >
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
        <Image src={item.imageUrl} alt={item.title}/>
        
    </Container>
  )
}

export default CategoryItem

const Container = styled.div`

margin:3px 10px;

box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.55);
border-radius: 20px;
flex: 1;
height: 60vh;
position: relative;
background-color: #f5f4fa;
`
const Info = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;


justify-content: space-between;

position: absolute;`
    

const Title = styled.h2`

color: #211067;
font-size: 1.5em;
padding:1.5em;`

const Button = styled.button`
background-color: #fff;
font-family: 'Nunito', sans-serif;
width:150px;
height:30px;
border-color: black;
border-radius:5px;
border-width:1px;
margin:2em;
box-shadow: 2px 2px 10px black;
cursor: pointer;

`

const Image = styled.img`

position: absolute;
bottom: 0;
right: -30px;


width: 200px;
height: 200px;`


