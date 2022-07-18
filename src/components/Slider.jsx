import styled from 'styled-components'
import React, { useState } from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px" };
  right: ${props => props.direction === "right" && "10px"};

  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(0vw);
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};

`

const ImgContainer = styled.div`
  height: 50%;
  weight: 50%
  flex: 1;
  align-items: center;
  margin-left: 100px;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin-right: 100px;
`

const Image = styled.img`
  height: 80%;

`

const Title = styled.h1`
  font-size: 70px;
`

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")} >
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src="https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-13-pro-max-sierra-blue?fmt=pjpg" />
          </ImgContainer>
        
          <InfoContainer>
            <Title>Iphone 13 Pro Max Sale!!!</Title>
            <Desc>
              iPhone 13 Pro Max are currently available in sierra blue, graphite, gold, and silver, and will be available in the new alpine green in 128GB, 256GB, 512GB, and 1TB storage options, starting at $999 (US) and $1,099 (US) respectively.
            </Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>

        <Slide bg="fbf0f4">
          <ImgContainer>
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4264/4264701_sd.jpg" />
          </ImgContainer>
        
          <InfoContainer>
            <Title>Ipad 13 Pro Max Sale!!!</Title>
            <Desc>
              iPad Pro features the powerful Apple M1 chip for next-level performance and all-day battery life.³ An immersive 12.9-inch Liquid Retina XDR display for viewing and editing HDR photos and videos.¹ And a front camera with Center Stage keeps you in frame automatically during video calls. iPad Pro has pro cameras and a LiDAR Scanner for stunning photos, videos, and immersive AR. Thunderbolt for connecting to high-performance accessories. And you can add Apple Pencil for note-taking, drawing, and marking up documents, and the Magic Keyboard for a responsive typing experience and trackpad.
            </Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>

        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450853_sd.jpg" />
          </ImgContainer>
        
          <InfoContainer>
            <Title>Macbook Pro Sale!!!</Title>
            <Desc>         
              The new MacBook Pro delivers game-changing performance for pro users. Choose the powerful M1 Pro or the even more powerful M1 Max to supercharge pro-level workflows while getting amazing battery life.¹ And with an immersive 16-inch Liquid Retina XDR display and an array of pro ports, you can do more than ever with MacBook Pro.²
            </Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>

      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  )
}

export default Slider
