import React from 'react'
import { FaRegCheckCircle, FaInfoCircle } from 'react-icons/fa';
import { IoIosWarning } from 'react-icons/io';
import { VscError } from 'react-icons/vsc';

const STATUS_TYPES = {
    success: {icon: FaRegCheckCircle, className: 'success'},
    warning: {icon: IoIosWarning, className: 'warning'},
    error: {icon: VscError, className: 'error'},
    info: {icon: FaInfoCircle, className: 'info'}
}

export const BannerContext = React.createContext()

export default function Banner ({children, status}) {
    const statusToRender = STATUS_TYPES[status] ? STATUS_TYPES[status] : STATUS_TYPES.info
    const StatusIcon = statusToRender.icon
    const statusClassName= statusToRender.className
    
    return (
        <BannerContext.Provider value={status}>
            <div className={`banner-container banner-container-${statusClassName}`}>
                <StatusIcon size={20}/>
                <div className="banner-inner">{children}</div>
            </div>
        </BannerContext.Provider> 
    )
}
