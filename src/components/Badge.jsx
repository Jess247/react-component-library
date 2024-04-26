import React from "react"


export default function Badge({children, color, style}) {
    return (
        <button className={`${style} ${color}`}>{children}</button>
    )
}