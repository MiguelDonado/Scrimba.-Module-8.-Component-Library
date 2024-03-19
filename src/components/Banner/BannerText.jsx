import React from 'react'
import { BannerContext } from './Banner.jsx'

export default function BannerText ({children}) {
    const status = React.useContext(BannerContext)
    
    if (children){
        return (
            <h1 className={`banner-text banner-text-${status}`}>{children}</h1>
            )
        }
}