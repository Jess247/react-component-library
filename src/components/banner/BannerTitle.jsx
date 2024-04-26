import {useState} from "react";

export default function BannerTitle({children}) {
    return (
        <h3 className="banner__title">{children}</h3>
    )
}