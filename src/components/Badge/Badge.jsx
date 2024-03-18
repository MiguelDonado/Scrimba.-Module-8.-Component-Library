import React from 'react'
import classnames from "classnames"

export default function Badge({children, color, shape,...rest}) {
    const colorClass = color ? `badge-btn-${color}` : "badge-btn-gray" 
    const shapeClass = shape ? `badge-btn-${shape}` : "badge-btn-square"
    const allClasses = classnames("badge-btn", colorClass, shapeClass)
    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}

