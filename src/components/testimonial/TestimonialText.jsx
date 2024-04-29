export default function TestimonialText({children, name, company}) {
    return (
        <div>
            <p className="testimonial__text testimonial-default__text">{children}</p> 
            <span className="testimonial__name testimonial-default__name">{name}</span>
            <span className="testimonial__company testimonial-default__company">{company}</span>
        </div>
    )
}