import React from 'react'
import { CardContext } from './Card'



export default function CardInnerContent({children}) {
    
    const { open } = React.useContext(CardContext)

    return (
        <>
            {open ? <h2 className="card-description">{children}</h2> : null}
        </>
    )
}