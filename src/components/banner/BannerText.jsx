import {useState} from "react";

export default function BannerText({children}) {
    return (
        <p className="banner__text">{children}</p>
    )
}