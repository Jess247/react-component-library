import { useState } from "react"
import { PiTreePalmBold } from "react-icons/pi"

export default function TestimonialNoPic({children}) {
    return(
        <div className="testimonial-default">
            <div className="logo-container">
                <h3 className="logo-container__logo"><PiTreePalmBold /><span>Work</span>cation</h3>
            </div>
            {children}
        </div>
    )
}