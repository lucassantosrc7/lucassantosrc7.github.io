import React from 'react'

const SelectForm = ({ id, value, onChange, title, width, height, textColor, options }) => {
    return (
        <>
            <div className='flex flex-col gap-1'>
                <label htmlFor={id} className={`text-[20px] font-bold ${textColor} dark:text-white`}>{title}</label>
                <select
                    id={id}
                    value={value}
                    onChange={onChange}
                    required
                    className={`w-[${width}px] h-[${height}px] bg-white text-gray border-1 border-pink dark:border-blue border-solid rounded pl-2`}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default SelectForm
