import {useContext} from "react";
import {BannerContext} from '../../App'

export default function BannerText({children}) {

    const {isBannerMultiline} = useContext(BannerContext)

    return isBannerMultiline ? (
        <p className="banner__text">{children}</p>
    ) : null
}