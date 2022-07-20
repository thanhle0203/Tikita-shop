import React from "react";
import { style } from "@mui/system"
import styled from "styled-components"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Container = styled.div`

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
`
const SocialContainer = styled.div`
`
const SocialIcon = styled.div`
`

const Center = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 1;
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
          <SocialIcon>
            <FacebookOutlinedIcon />
            <TwitterIcon />
            <InstagramIcon />
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>

      </Center>

      <Right></Right>
    </Container>
  )
}

export default Footer