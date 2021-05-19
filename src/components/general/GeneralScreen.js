import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const GeneralScreen = ({
    component : Component
}) => {
    return (
        <>
         <Navbar/>
         <div className="page-content">
           <Component/> 
         </div>
         <Footer/>   
        </>
    )
}
