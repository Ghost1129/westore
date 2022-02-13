import React from 'react'
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryItem from './CategoryItem';
import { VscChevronRight,VscChevronLeft } from "react-icons/vsc";

const NextArrow =({onClick })=>{
    return(
        <ArrowN
      onClick={onClick}>
            <VscChevronRight
            style={{fontSize:'22px',color:'black'}}/>
        </ArrowN>
    )
}
const PrevArrow =({ onClick })=>{
    return(
        <ArrowL
        
      onClick={onClick}>
            <VscChevronLeft
            style={{fontSize:'22px',color:'black'}}/>
        </ArrowL>
    )
}

const Categories = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
   
    



  return (
      <Container>
          <Title>CATEGORIES</Title>
          {/*//^ Carousel used react-slick to divide categories to parts   */}
           <Slider {...settings}>
               {/*//^Currently mapping data from the file*/}
               {
                     fib.map((item) => (
                        <CategoryItem key={item.id} item={item} />
                     )
                            
                         
                       )
               }
           
          </Slider>

      </Container>
    
  )
}

export default Categories

const Container = styled.div`
height: 80vh;

margin: 20px 40px;


justify-content: space-between;

`
const Title = styled.h2`
text-align: center;
padding: 20px;
`
const ArrowN = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 100%;
width: 40px;
height: 40px;
background-color: #faf4f4;
position: absolute;
top: 50%;
right: -1%;
box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.55);
transition: scale 0.5s;
&:hover{
    scale:1.2;
}`

const ArrowL = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 100%;
width: 40px;
height: 40px;
background-color: #faf4f4;
position: absolute;
top: 50%;
left: -1%;
z-index:1;
box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.55);
transition: all 0.5s;
&:hover{
    scale:1.2;
}`

export const fib = [{
    id:1,
    title:'Electronic',
    name:'woho',
    imageUrl:'https://i.ibb.co/CsFwhvX/fococlipping-20220212-23135.png'

}
,
{
    id:2,
    title:'Electronics',
    name:'woho',
    imageUrl:''

},{
    id:3,
    title:'Electronic1',
    name:'woho',
    imageUrl:''
    

},{
    id:4,
    title:'Electronic2',
    name:'woho',
    imageUrl:''

}]