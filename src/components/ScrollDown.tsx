import "./global.css"
import React from 'react'
import styled, { keyframes } from 'styled-components'

const neonGlow = keyframes`
  0% {
    text-shadow:
    0 0 1px #f04,
    0 0 2px #f04,
    0 0 5px #f04,
    /* Reddish glow */
    0 0 10px #f02,
    0 0 15px #f02,
    0 0 20px #f02,
    0 0 22px #f02,
    0 0 30px #f02;
  }
  20% {
    text-shadow:
    0 0 2px #f04,
    0 0 4px #f04,
    0 0 10px #f04,
    /* Reddish glow */
    0 0 20px #f02,
    0 0 40px #f02,
    0 0 45px #f02,
    0 0 52px #f02,
    0 0 75px #f02;
  }
  35% {
    0 0 5px #f04,
    0 0 7px #f04,
    0 0 15px #f04,
    /* Reddish glow */
    0 0 32px #f02,
    0 0 60px #f02,
    0 0 78px #f02,
    0 0 88px #f02,
    0 0 125px #f02;
  }
  50% {
    text-shadow: 0 0 7px #f04,
    0 0 10px #f04,
    0 0 21px #f04,
    /* Reddish glow */
    0 0 42px #f02,
    0 0 82px #f02,
    0 0 92px #f02,
    0 0 102px #f02,
    0 0 151px #f02;
  }
  100% {
    text-shadow:
    0 0 1px #f04,
    0 0 2px #f04,
    0 0 5px #f04,
    /* Reddish glow */
    0 0 10px #f02,
    0 0 15px #f02,
    0 0 20px #f02,
    0 0 22px #f02,
    0 0 30px #f02;
  }
`

const scrollFrames = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(10px); }
`

const ScrollDown = styled.div.attrs(props => ({ className: props.className})
)`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 5;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.2em;
  font-size: 0.8em;

  span {
    display: block;
    cursor: pointer;
  }

  .scroll-down {
  margin-top: 10px;
  width: 18px;
  cursor: pointer;  
  height: 18px;
  animation: ${scrollFrames} 0.95s ease-in-out alternate infinite;
  fill: none;
  stroke: #fff;
  stroke-linecap: round;
  stroke-width: 1;
}
`

const HeaderTitle = styled.h1.attrs(props => ({
  className: props.className
}))`
  font-family: Anders, Robiduss, sans-serif;
  margin-Bottom: 40px;
  font-size: 3.5em;
  fontWeight: 500;
  user-select: none;
  color: #f06;
  text-shadow: 0 0 7px #f04,
  0 0 10px #f04,
  0 0 21px #f04,
  /* Reddish glow */
  0 0 42px #f02,
  0 0 82px #f02,
  0 0 92px #f02,
  0 0 102px #f02,
  0 0 151px #f02;
  animation: ${neonGlow} 5s ease-in-out alternate infinite;  
`

const HeaderSpan = styled.span`
  font-family: "Anders", Robiduss, sans-serif;
  font-Size: 1.2em; 
  user-select: none; 
  color: #fff; 
  font-weight: 700;
`

export default function Scroll({ scrollToSection } : { scrollToSection: (index: number) => void }) {
  return (
    <ScrollDown>
      <HeaderTitle>
        XMO
      </HeaderTitle>
      <HeaderSpan onClick={() => scrollToSection(1)}>SCROLL</HeaderSpan>
      <HeaderSpan onClick={() => scrollToSection(1)}>DOWN</HeaderSpan>
      <svg className="scroll-down" onClick={() => scrollToSection(1) } viewBox="0 0 24 24">
        <line className="st1" x1="12" y1="1" x2="12" y2="22.5" />
        <line className="st1" x1="11.9" y1="22.4" x2="5.1" y2="15.6" />
      </svg>
    </ScrollDown>
  )
}