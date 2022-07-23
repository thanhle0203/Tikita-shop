
import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive"


const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  ${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})};
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  fullwidth;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({width: "50px"})}
`

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "24px"})};
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "12px", marginLeft: "10px"})}
`

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  text-align: center;
  ${mobile({flex: 2, justifyContent: "center"})}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({justifyContent: "center"})}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <SearchIcon style={{color: "gray", fontSize: 16}} />
    
          </SearchContainer>
        </Left>
    
        <Center>
          <Logo>
            Tikita
          </Logo>
        </Center>

        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon color="action" />
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>

  )
}

export default Navbar