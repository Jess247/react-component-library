export default function TestimonialText({children, name, company}) {
    return (
        <>
            <p className="testimonial__text">{children}</p> 
            <p className="testimonial__name">{name}</p>
            <p className="testimonial__company">{company}</p>
        </>
    )
}