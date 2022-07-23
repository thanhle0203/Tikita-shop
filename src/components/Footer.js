import React from "react";
import styled from "styled-components"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MapIcon from '@mui/icons-material/Map';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({width: "column"})}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1`
`
const Desc = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: "none"})}
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor: "#eee"})}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`
  width: 80%;
  height: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Tikita</Logo>
        <Desc>
          Get huge discounts of electronic products from the top brands in the World. Confident shopping with our excellent customer services. 
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookOutlinedIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Hme</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Apple Products</ListItem>
          <ListItem>Samsumg Products</ListItem>
          <ListItem>Google Products</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem> <MapIcon style={{marginRight:"10px"}} />
          5102 Washington Blvd, San Jose, CA 95110
        </ContactItem> 
        <ContactItem> <ContactPhoneIcon style={{marginRight:"10px"}} />
          +1 408 555 1234
        </ContactItem>
        <ContactItem> <MarkEmailReadIcon style={{marginRight:"10px"}} />
          tikita@gmail.com
        </ContactItem>

        <Payment src="https://images.ctfassets.net/7y9uzj0z4srt/105PCNt7E8LedBpY2bUyMP/577b789296cd35a44041edbfe3d8b78c/mya-select-checkbox-02.png" />
      </Right>
    </Container>
  )
}

export default Footer