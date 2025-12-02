import React from 'react'
import { useState, useEffect } from 'react'

const DateTime = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => clearInterval(timer)
    }, [])

    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString(undefined, options)
    }

    const formatTime = (date) => {
        return date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
    }

    return (
        <>
            {formatDate(date)} - {formatTime(date)}
        </>
    )
}

export default DateTime
