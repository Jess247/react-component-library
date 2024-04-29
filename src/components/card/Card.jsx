import { useContext } from "react"

export default function Card({children, icon}) {
    return (
        <div className="card">
            {icon}
            {children}
        </div>
    )
}