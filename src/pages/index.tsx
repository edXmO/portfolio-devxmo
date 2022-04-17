import React, { useEffect, useRef, useState } from 'react'
import Layout from "../components/layout"
import styled from 'styled-components'
import { ScrollTrigger } from "gsap/src/all"
import gsap from "gsap";
import Scroll from '../components/ScrollDown';
import { fillRefArray } from '../utils/utils';

gsap.registerPlugin(ScrollTrigger);

const pageStyles = {
  color: "#232129",
  background: "#000",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  scrollSnapType: "y mandatory",
  scrollSnapPointsY: "repeat(100%)",
  scrollSnapStop: "start",
  overflow: "auto"
}

const HomeSection = styled.section.attrs(props => (
  { className: props.className }
))`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  scroll-snap-align: end;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 1.5em 0;
  background: #000;
  & .reveal {
    position: relative;
    color: #fff;
    fontSize: 2.5em;
    padding: 0 10px; 
    transform-origin: left;
    transform: scaleX(0);
    transition: 0.5s;
    transition-delay: 0.5s;
  }
  & .reveal.active {
    transform: scaleX(1);
  }
  & .reveal:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f04;
    transform-origin: right;
    transition: 0.5s;
    transition-delay: 0.5s;
  }
  & .reveal:nth-child(2) {
    font-weight: 300;
    font-size: 1.5em;
    letter-spacing: 2px;
    display: inline-block;
  }

  & .reveal:nth-child(2):before {
    background: #f02;
  }

  & .reveal.active:before {
    transform: scaleX(0);
    transition-delay: 0.5s
  }

  img {
    position: relative;
    display: block;
    margin-left: 10px;
    margin-top: 10px;
    max-with: 300px;
  }

`

const SectionOne = styled.section.attrs(props => ({ className: props.className }
))`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 60%;
  width: 45vw;
  height: 300px;
  & .image_container { 
    display: flex;
    flex: 1;
    min-width: 60%;
    flex-direction: row;
    flex-wrap: wrap;
    z-Index: 5;
    margin: 1em 0 0 0;
    background-color: #000;
  }

  & .image-container .active {
    background-color: #fff;
    transition: background-color 0.5s linear;
  }

  div > img:first-child {
    width: 93%;
    max-height: 150px;
    position: relative;
    transform-origin: left;
    transform: scaleX(0);
    transition: 0.3s;
    transition-delay: 0.5s;
  }

  div > img:first-child.active {
    transform: scaleX(1);
  }

  div > img:not(:first-child) {
    width: 45%;
    max-height: 120px;
  }

  div > img:nth-child(2) {
    position: relative;
    transform-origin: bottom;
    transform: scaleY(0);
    transition: 0.4s;
    transition-delay: 0.6s;
  }

  div > img:nth-child(2).active {
    transform: scaleY(1);
  }

  div > img:nth-child(3) {
    position: relative;
    transform-origin: right;
    transform: scaleX(0);
    transition: 0.5s;
    transition-delay: 0.7s;
  }

  div > img:nth-child(3).active {
    transform: scaleX(1);
  }
  
  div > p:first-child {
    padding: 0.5em 1em 0em 1em;
  }

  div > p {
    color: #fff;
    padding: 1em;
  }
  
  img {
    position: relative;
    display: block;
    margin-left: 10px;
    margin-top: 10px;
    max-with: 300px;
  }
`

const SvgArrow = styled.svg`
  xmlns: "http://www.w3.org/2000/svg";
  position: absolute;
  z-index: 1;
  top: 43vh;
  fill: none;
  width: 190px;
  height: 576px;
  view-box: 0 0 190 576;
  filter: drop-shadow(0px 0px 1px rgb(255 0 68 / 1));
  filter: drop-shadow(0px 0px 2px rgb(255 0 68 / 1));
  filter: drop-shadow(0px 0px 5px rgb(255 0 68 / 1));
  filter: drop-shadow(0px 0px 10px rgb(255 0 68 / 1));
  filter: drop-shadow(0px 0px 15px rgb(255 0 34 / 1));
  filter: drop-shadow(0px 0px 20px rgb(255 0 34 / 1));
  filter: drop-shadow(0px 0px 22px rgb(255 0 34 / 1));
  filter: drop-shadow(0px 0px 30px rgb(255 0 34 / 1)); 
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
`

const headerStyle = {
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const IndexPage = () => {
  const mainContainerRef = useRef<HTMLElement | null>(null);
  const sectionRefs = useRef<HTMLElement[]>([]);
  const sectionHeaderRefs = useRef<HTMLHeadingElement[]>([]);
  const sectionOneImgRefs = useRef<HTMLElement[]>([]);
  const containerRef = useRef<HTMLElement | null>(null);
  const svgRef = useRef<SVGPathElement | null>(null);

  function scrollTriggerListener() {
    sectionOneImgRefs.current.forEach(img => {
      ScrollTrigger.create({
        scroller: mainContainerRef.current,
        trigger: img,
        toggleClass: "active",
        start: "top 95%",
        end: "bottom 35%",
        toggleActions: 'play none none reverse',
        markers: false
      })
    })

    sectionHeaderRefs.current.forEach(el => {
      ScrollTrigger.create({
        scroller: mainContainerRef.current,
        trigger: el,
        toggleClass: "active",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: 'play none none reverse',
        markers: false
      })
    })
  }

  function scrollToSection(index: number) {    
    gsap.fromTo(svgRef.current,
      {
        strokeDashoffset: 1000,
        strokeDasharray: 1000,
      },
      {
        strokeDashoffset: 0,
        strokeDasharray: 1000,
        duration: 1,
    })

    if(index === 0){
      gsap.fromTo(svgRef.current,
        {
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        },
        {
          strokeDashoffset: 1000,
          strokeDasharray: 1000,
          duration: 1,
      })
    }

    const section = sectionRefs.current[index];
    section.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    scrollTriggerListener();
  }, []);

  return (
    <Layout scrollToSection={scrollToSection}>
      <main
        ref={ref => { if (ref) { mainContainerRef.current = ref } }}
        //@ts-ignore
        style={pageStyles}>
        <HomeSection
          ref={ref => { if (ref) { sectionRefs.current.push(ref) } }}>
          <div
            ref={ref => { if (ref) containerRef.current = ref }}
            style={headerStyle}>
            <SvgArrow>
              <path
                ref={ref => { if (ref) svgRef.current = ref }}
                d="M125.25 1C125.25 16 219 45 87 16C-45 -13 71.9999 156 50 181C28 206 -68.8022 213.579 92.0989 315.79C253 418 125.25 491.202 125.25 572.5L149.25 544.622"
                stroke="#FF0066"
                stroke-width="2"
                stroke-linecap="round"
              />
            </SvgArrow>
            <Scroll
              scrollToSection={scrollToSection} />
          </div>
        </HomeSection>
        <HomeSection
          ref={ref => { if (ref) { sectionRefs.current.push(ref) } }}>
          <div>
            <h2
              ref={ref => { if (ref) { sectionHeaderRefs.current.push(ref) } }}
              className="reveal">
              Dream. Believe.
            </h2>
            <h2
              ref={ref => { if (ref) { sectionHeaderRefs.current.push(ref) } }}
              style={{ color: "#f06" }}
              className="reveal glow-min">
              Create.
            </h2>
            <SectionOne>
              <div
                ref={ref => { if (ref) { sectionOneImgRefs.current.push(ref) } }}
                className="image_container">
                <img ref={ref => { if (ref) { sectionOneImgRefs.current.push(ref) } }} src={'../images/kissland.jpeg'} />
                <img ref={ref => { if (ref) { sectionOneImgRefs.current.push(ref) } }} src={'../images/kissland.jpeg'} />
                <img ref={ref => { if (ref) { sectionOneImgRefs.current.push(ref) } }} src={'../images/kissland.jpeg'} />
              </div>
              <div>
                <p>Text</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quia laborum tempore ab.</p>
                <p>Exercitationem nostrum illo dignissimos voluptate eligendi porro neque sapiente fugiat minima beatae odio accusamus labore veritatis sunt?</p>
              </div>
            </SectionOne>
          </div>
        </HomeSection>
        <HomeSection ref={ref => { if (ref) { sectionRefs.current.push(ref) } }}>
          <div>
            <h2
              ref={ref => { if (ref) { sectionHeaderRefs.current.push(ref) } }}
              className="reveal">
              Reveal Content on Scroll
            </h2>
            <h2
              ref={ref => { if (ref) { sectionHeaderRefs.current.push(ref) } }}
              className="reveal">
              Reveal Content
            </h2>
            <img src={'../images/kissland.jpeg'} height="250px" width="335px" />
          </div>
        </HomeSection>
        <HomeSection ref={ref => { if (ref) { sectionRefs.current.push(ref) } }}>
          <div>
            <h2
              ref={ref => ref && fillRefArray(sectionHeaderRefs.current, ref)}
              className="reveal">
              Reveal Content on Scroll
            </h2>
            <h2
              ref={ref => ref && fillRefArray(sectionHeaderRefs.current, ref)}
              className="reveal">
              Reveal Content
            </h2>
            <img src={'../images/kissland.jpeg'} height="250px" width="335px" />
          </div>
        </HomeSection>
      </main>
    </Layout>
  )
}

export default IndexPage
