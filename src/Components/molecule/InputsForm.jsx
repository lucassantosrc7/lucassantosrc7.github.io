import React from 'react'

const InputsForm = ({
    type,
    id,
    value,
    onChange,
    title,
    width,
    height,
    textColor,
    placeholder,
    options // usado quando for radio-group
}) => {

    return (
        <div className='flex flex-col gap-1'>

            {/* Label */}
            <label
                htmlFor={id}
                className={`text-[20px] font-bold ${textColor} dark:text-white`}
            >
                {title}
            </label>

            {/* ---------------------- RADIO GROUP ---------------------- */}
            {type === "radio-group" && (
                <div className={`flex flex-wrap gap-4 ${width ? width : "w-full"}`}>
                    {options?.map((op) => (
                        <label key={op} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name={id}
                                value={op}
                                checked={value === op}
                                onChange={onChange}
                                className="accent-pink h-4 w-4"
                            />
                            <span>{op}</span>
                        </label>
                    ))}
                </div>
            )}

            {/* ---------------------- TEXTAREA ---------------------- */}
            {type === "textarea" && (
                <textarea
                    id={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required
                    className={`
                        ${width ? width : 'w-full'}
                        bg-white text-gray
                        border-1 border-pink dark:border-blue border-solid
                        rounded p-2
                        min-h-[120px]
                        focus:outline-none focus:ring-2 focus:ring-pink
                    `}
                />
            )}

            {/* ---------------------- INPUT NORMAL ---------------------- */}
            {type !== "radio-group" && type !== "textarea" && (
                <input
                    type={type}
                    id={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required
                    className={`
                        ${width ? width : 'w-full'}
                        h-[${height}px]
                        bg-white text-gray
                        border-1 border-pink dark:border-blue border-solid
                        rounded pl-2
                    `}
                />
            )}
        </div>
    )
}

export default InputsForm
