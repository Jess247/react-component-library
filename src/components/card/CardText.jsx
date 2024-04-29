import { useContext } from "react"

export default function CardText({children}) {
    return (
        <p className="card__text">{children}</p>
    )
}