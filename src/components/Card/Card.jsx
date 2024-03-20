import React from 'react'
import { TbCloudUpload } from "react-icons/tb"
import useToggle from '../../hooks/useToggle'


export const CardContext = React.createContext()

export default function Card ({children, icon, bgIcon, width, onClick}) {
    const [open, toggleOpen] = useToggle(false, onClick)
    
    const iconStyle = { backgroundColor: bgIcon ? bgIcon : null }

    return (
        <CardContext.Provider value={{open}}>
            <div className="card-container" style={{width}}>
                {
                    icon ? 
                    React.cloneElement(icon, {className: "card-icon", style: iconStyle, onClick: toggleOpen}): 
                    <TbCloudUpload className="card-icon" style={iconStyle} onClick={toggleOpen}/>
                }
                
                {children}
            </div>
        </CardContext.Provider>
    )
}