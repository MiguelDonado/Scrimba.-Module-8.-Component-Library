import React from 'react'
import { BannerContext } from './Banner.jsx'

const STATUS_TITLE = {
    success: "Congratulations!",
    warning: "Attention",
    error: "There is a problem with your application",
    info: `Update available`
}

export default function BannerTitle ({children}) {
    
    const status = React.useContext(BannerContext)
    const title = children ? children : STATUS_TITLE[status] || STATUS_TITLE.info
    return (
        <h2 className={`banner-title banner-title-${status}`}>{title}</h2>
    )
}