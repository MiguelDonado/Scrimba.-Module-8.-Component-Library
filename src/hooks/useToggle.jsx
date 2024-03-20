import React from 'react'
import useEffectOnUpdate from './useEffectOnUpdate'

export default function useToggle (initialValue = false, onToggle = () => { }) {
    const [on, setOn] = React.useState(initialValue)

    useEffectOnUpdate(onToggle,[on])

    function toggle() {
        setOn(prevValue => !prevValue)
    }
    return [on, toggle]
}