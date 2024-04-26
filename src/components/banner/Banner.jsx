import {Children, useState} from "react";
import { FaCheckCircle, FaExclamationTriangle, FaExclamationCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

export default function Banner({children, type}) {
    let bannerType = ""
    switch(type) {
        case 'success': bannerType = <FaCheckCircle/>
            break
        case 'warning': bannerType = <FaExclamationTriangle/>
            break
        case 'error': bannerType = <FaCircleXmark/>
            break
        case 'neutral': bannerType = <FaExclamationCircle/>
            break
    }

    return (
        <div className={`banner ${bannerType}`}>
            {bannerType}
            {children}
        </div>
    )
}
