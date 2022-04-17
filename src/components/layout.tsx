import React from 'react'
import "./layout.css"
import Nav from './Nav'

export default function Layout(
   { children, scrollToSection }
      :
      { children: React.ReactNode | React.ReactNode[], scrollToSection: (index: number) => void }) {

   return (
      <div className="layout">
         <Nav scrollToSection={scrollToSection} />
         {children}
      </div>
   )
}