import React from 'react'


const SearchBar = ({ type = 'text', placeholder = 'Pesquisar...', width = 'w-full', widthxl = 'xl:w-[240px]' }) => {

    return (
        <>
            <button className='p-1 focus:outline-none text-pink dark:text-blue cursor-pointer'>
                <i className='bx bx-search text-xl xl:text-2xl'></i>
            </button>
            <input
                type={type}
                placeholder={placeholder}
                className={`${width} ${widthxl} text-gray dark:text-blue outline-none px-2 py-1 bg-transparent text-sm xl:text-base`}
            />
        </>
    )
}

export default SearchBar
