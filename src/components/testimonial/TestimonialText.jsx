export default function TestimonialText({children, name, company}) {
    return (
        <div>
            <p className="testimonial__text">{children}</p> 
            <span className="testimonial__name">{name}</span>
            <span className="testimonial__company">{company}</span>
        </div>
    )
}