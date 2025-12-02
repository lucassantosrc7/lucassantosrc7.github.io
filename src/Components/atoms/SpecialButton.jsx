import React from 'react'

const SpecialButton = ({
    onClick,
    label,
    size,
    width,
    height,
    border = 'border-b-[20px]',
    borderColor = 'border-pink',
    hoverborderColor = 'hover:border-blue',
    darkBorderColor = 'dark:border-blue',
    hoverdarkBorderColor = 'hover:dark:border-pink',
    bgColor = 'bg-white',
    darkBgColor = 'dark:bg-dark-gray',
    textColor = 'text-gray',
    hovertextColor = 'hover:text-blue',
    darktextColor = 'dark:text-white',
    hoverdarktextColor = 'hover:dark:text-pink'
}) => {
    return (
        <button
            onClick={onClick}
            className={`font-black 
            text-center 
            rounded-lg 
            cursor-pointer 
            ${size} 
            ${textColor} 
            ${hovertextColor} 
            ${darktextColor} 
            ${hoverdarktextColor} 
            ${bgColor} 
            ${darkBgColor} 
            ${width} 
            ${height} 
            ${border} 
            ${borderColor} 
            ${hoverborderColor} 
            ${darkBorderColor} 
            ${hoverdarkBorderColor}`
            }>
            {label}
        </button>
    )
}

export default SpecialButton
