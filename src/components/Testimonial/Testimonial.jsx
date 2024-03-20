import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri"

export default function Testimonial ({children, imgSrc, name, worklocation}) {
    
    return (
            <div className="testimonial-container">
                <div className="testimonial-img-container">
                    <img className="testimonial-img" src={imgSrc}></img>
                </div>
                {<div className="testimonial-inner">
                    <RiDoubleQuotesL size={40} style={{color: "#6E87E2", margin: "0"}}/>
                    {children}
                    <h2 className="testimonial-inner-name">{name}</h2>
                    <h3 className="testimonial-inner-worklocation">{worklocation}</h3>
                </div>}
            </div>
    )
}

