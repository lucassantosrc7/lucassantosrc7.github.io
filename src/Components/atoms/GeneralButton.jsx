import React from 'react'

const GeneralButton = ({
    label,
    onClick,
    state,
    width,
    height,
    bgColor = 'bg-pink',
    hoverBgColor = 'hover:bg-blue',
    darkBgColor = 'dark:bg-blue',
    hoverDarkBgColor = 'hover:dark:bg-pink',
    size = 'text-[18px]',
    rounded = 'rounded-lg',
    padding,
    margin = 'mb-2',
    weight = 'font-medium'
}) => {
    return (
        <button
            className={`${width} ${height} ${bgColor} ${darkBgColor} ${hoverBgColor} ${hoverDarkBgColor} ${margin} ${padding} ${rounded} text-white ${size} ${weight} cursor-pointer`}
            onClick={onClick}
            state={state}
        >
            {label}
        </button>
    )
}

export default GeneralButton
