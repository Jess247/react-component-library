import {Children, useState, useContext} from "react"
import {BannerContext} from '../../App'
import { FaCheckCircle, FaExclamationTriangle, FaExclamationCircle } from "react-icons/fa"
import { FaCircleXmark } from "react-icons/fa6"


export default function Banner({children}) {
    const {bannerType} = useContext(BannerContext)

    let type = ""
    switch(bannerType) {
        case 'success': type = <FaCheckCircle/>
            break
        case 'warning': type = <FaExclamationTriangle/>
            break
        case 'error': type = <FaCircleXmark/>
            break
        case 'neutral': type = <FaExclamationCircle/>
            break
    }

    return (
        <div className={`banner ${bannerType}`}>
            {type}
             {children}
        </div>
    )
}
