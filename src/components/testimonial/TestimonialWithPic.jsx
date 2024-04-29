import { useState } from "react"

export default function TestimonialWithPic({children, img}) {
    return(
        <div className="testimonial">
            <img className="testimonial__img" src={img} alt="Profile picture of the customer."/>
            {children}
        </div>
    )
}