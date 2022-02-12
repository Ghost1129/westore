import React from 'react'
import styled from "styled-components";
import { MdSearch,MdArrowDropDown ,MdExpandMore,MdShoppingCart} from "react-icons/md";



const NavbarContainer = styled.div`
height: 60px;
background-color: #4c24e2;`

const NavbarInner = styled.div`
display: flex;
align-items: center;
  justify-content: space-between;
  padding: 0 20px;

`
const NavbarLeft = styled.div`
display: flex;
height: 60px;
width: 20%;
color: #fff;
`
const Logo = styled.div`

padding: 6px;
display: flex;
align-items: center;
font-size: 1.5em;
font-family: 'Mochiy Pop P One', sans-serif;
letter-spacing: 1px;
span{
    font-weight: 900;
}
`
const InputContainer = styled.div`
background-color: #fff;

display: flex;
align-items: center;

height: 40px;
width: 450px;
border-radius: 5px;

.search{
    margin-right: 10px;
}`
const Input = styled.input`
padding: 0 10px;
border: none;
width: 80%;
height: 100%;
border-radius: 5px;
outline: none;`
const InputInner = styled.div`
border-radius: 5px 0px 0px 5px; 
padding: 1px 4px;

height: 100%;
color:white;
background-color: black;
display: flex;
align-items: center;
justify-content: center;
font-size: 0.8em;
width: 150px;
cursor: pointer;
`

const NavbarCenter = styled.div`

flex: 1;
display: flex;
align-items: center;
`
const NavbarRight = styled.div`
color: #fff;
display: flex;
align-items: center;
flex: 1;
justify-content: flex-end;
`
const Account = styled.div`
display: flex;
align-items: center;
position: relative;
cursor: pointer;
::after{
    margin: 0 10px;
    content: '';
    width: 1px;
    height: 20px;
    background-color: #fff;
}
&:hover{
    .dropdown{
        display: flex;
        
    }
}
`

const AccountDropdown = styled.div`
display: none;
background-color: black;
border-radius: 0 0 5px 5px;

top: 100%;
width: 80%;
position: absolute;

flex-direction: column;
span{
    padding: 10px;
    font-size: 0.8em;
    cursor: pointer;
}
&:hover{
    display: flex;}`

const Country = styled.div`

display: flex;
align-items: center;
margin: 0 20px;
cursor: pointer;
.flag{
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-image: url('https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png');
    background-size: cover;


}`
const Cart = styled.div`
display: flex;
align-items: center;
margin-right: 20px;
padding: 0 10px;
cursor: pointer;
span{
    font-size: 0.8em;
    padding: 0 5px;
    background-color: black;
    border-radius: 100%;
    margin-left: 5px;
}
`

const Navbar = () => {
  return (
    <NavbarContainer>
        <NavbarInner>
            <NavbarLeft>
                <Logo>we<span>store</span></Logo>
            </NavbarLeft>
            <NavbarCenter>
                <InputContainer>
                    <InputInner>All Products
                    <MdArrowDropDown style={{fontSize: 20}}/>
                    </InputInner>
                    <Input placeholder="Search"/>
                    <MdSearch className='search' style={{color: 'black',fontSize: 28}}/>
                </InputContainer>
            </NavbarCenter>
            <NavbarRight>
                <Account>Account
                <MdExpandMore style={{fontSize: 20}}/>
                <Dropdown/>
               
                </Account>
                
                <Country>
                    <div className='flag'></div>
                    <MdExpandMore style={{fontSize: 20}}/>
                </Country>
                <Cart>
                    <MdShoppingCart style={{fontSize: 20}}/>
                    Cart
                    <span>0</span>
                </Cart>
            </NavbarRight>
        </NavbarInner>
    </NavbarContainer>
  )
}

export default Navbar

export const Dropdown = () => {
    return(
        <AccountDropdown className='dropdown'>
        <span>Myself</span>
        <span>Sign Out</span>
    </AccountDropdown>
    )
}