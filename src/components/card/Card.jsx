import { useContext } from "react"

export default function Card({children, icon}) {
    icon
    console.log(icon.className)
    return (
        <div className="card">
            <div className="card__icon-container">{icon}</div>
            {children}
        </div>
    )
}