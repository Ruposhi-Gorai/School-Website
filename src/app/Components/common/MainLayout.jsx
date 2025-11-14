import React from 'react'
import Navbar from './Header'
import Footer from './Footer'

export default function MainLayout({children}) {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    
    </>
  )
}
