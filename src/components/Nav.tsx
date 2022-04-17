import React, { useEffect, useRef} from 'react'
import styled from "styled-components"
import gsap from 'gsap';



const NavContainer = styled.div`
   position: fixed;
   z-index: 10;
   height: 100vh;
   width: 12vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   @media (max-width: 768px) {
      display: none;
   }
`

const NavItemContainer = styled.a.attrs(props => ({ className: props.className }))`
   display: flex;
   width: 200px;
   height: 2.6em;
   justify-content: center;
   align-items: center;
   transform: rotate(-90deg);
`

const NavItem = styled.div`
   font-family: 'Anders', sans-serif;
   color: #fff;
   user-select: none;
   cursor: pointer;
   font-weight: 600;
   font-size: 1.6em;
   transition: 0.4s ease-in;
   &:hover {
      color: #f06;
      text-shadow:
      0 0 1px #f04,
      0 0 2px #f04,
      0 0 5px #f04,
      0 0 10px #f02,
      0 0 15px #f02,
      0 0 20px #f02,
      0 0 22px #f02,
      0 0 30px #f02;  
      transition: color 0.8s;
      easing: ease-in-out;
   }
`

const SideNavBtn = styled.a`
   position: absolute;
   z-index: 10;
   right: 20px;
   cursor: pointer;
   @media (min-width: 768px) {
      display: none;
   }
`

const tl = gsap.timeline();

export default function Nav(
   { scrollToSection }
      :
      {  scrollToSection: (index: number) => void }) {

   const navItemRefs = useRef<HTMLElement[]>([]);

   useEffect(() => {
      if (navItemRefs.current.length > 0) { 
         tl
         .from(navItemRefs.current[0], { duration: 0.10, delay: 0.10, ease: "power2.out", x: -1000 })
         .from(navItemRefs.current[1], { duration: 0.15, delay: 0.15, ease: "power2.out", x: -1000 })
         .from(navItemRefs.current[2], { duration: 0.25, delay: 0.25, ease: "power2.out", x: -1000 })

         tl.play();
      }  
   }, [navItemRefs]);

   return (
      <>
         <SideNavBtn onClick={() => console.log('1')}>
            
         </SideNavBtn>
         <NavContainer>
            <NavItemContainer
               onClick={() => scrollToSection(0)}
               ref={ref => { if (ref) navItemRefs.current.push(ref) }}>
               <NavItem>HOME</NavItem>
            </NavItemContainer>
            <NavItemContainer
               onClick={() => scrollToSection(1)}
               ref={ref => { if (ref) navItemRefs.current.push(ref) }}>
               <NavItem>WHO</NavItem>
            </NavItemContainer>
            <NavItemContainer
               onClick={() => scrollToSection(2)}
               ref={ref => { if (ref) navItemRefs.current.push(ref) }}>
               <NavItem>CONTACT</NavItem>
            </NavItemContainer>
         </NavContainer>
      </>
   )
}


