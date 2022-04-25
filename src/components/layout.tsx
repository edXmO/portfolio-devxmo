import React from 'react'
import "./layout.css"
import Nav from './Nav'

export default function Layout(
   { children, scrollToSection, activeSection }
      :
      { children: React.ReactNode | React.ReactNode[], scrollToSection: (index: number) => void, activeSection: number }) {

   return (
      <div className="layout">
         <Nav scrollToSection={scrollToSection} activeSection={activeSection} />
         {children}
      </div>
   )
}