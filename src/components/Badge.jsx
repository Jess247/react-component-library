import React from "react"


export default function Badge({children, color, style}) {
    return (
        <div className={`${style} ${color}`}>{children}</div>
    )
}