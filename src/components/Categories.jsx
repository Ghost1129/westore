import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryItem from './CategoryItem';

const Categories = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 0,
        slidesToShow: 3,
        slidesToScroll: 3
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