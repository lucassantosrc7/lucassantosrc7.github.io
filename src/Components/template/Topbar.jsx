import { useState, useEffect } from 'react'
import DateTime from '../../utils/DateTime'
import DarkMode from '../../utils/DarkMode'
import SearchBar from '../../Components/atoms/SearchBar'

const Topbar = () => {

    const getPageName = () => {
        const path = window.location.pathname;
        if (path === '/') return 'Página Inicial';
        // Remove a barra inicial, substitui underline por espaço
        let page = path.replace('/', '').replace(/_/g, ' ');
        // Corrige nomes específicos
        if (page.toLowerCase() === 'licencas') return 'Licenças';
        if (page.toLowerCase() === 'relatorios') return 'Relatórios';
        return page;
    };

    return (
        <>
            <nav className={`fixed flex flex-col xl:flex-row justify-between items-center ml-2 sm:ml-6 lg:ml-10 xl:ml-0 pt-4 pb-8 xl:pb-4 px-16 xl:px-8 xl:py-12 w-full z-10 bg-light-gray dark:bg-gray ${window.innerWidth <= 768 ? ' pl-[110px]' : ''}`}>

                <div className='flex flex-col xl:flex-row justify-center xl:items-end items-center gap-y-1 gap-x-10 w-full xl:w-auto'>

                    <div className='flex flex-col w-full xl:w-auto items-center xl:items-start text-center xl:text-left'>
                        <h1 className='font-black text-2xl xl:text-2xl capitalize text-gray dark:text-white pl-10 xl:pl-80'>{getPageName()}</h1>
                        <h1 className='text-gray dark:text-white pl-10 xl:pl-80 text-base xl:text-base'>
                            <DateTime />
                        </h1>
                    </div>
                </div>

                <div className='flex flex-col xl:flex-row items-center gap-y-2 xl:gap-y-0 gap-x-1 xl:gap-x-4 mt-3 xl:mt-0 w-full xl:w-auto justify-center xl:justify-end ml-6'>
                    <span className='flex items-center gap-x-1 xl:gap-x-2 bg-white rounded-lg border border-pink dark:border-blue cursor-pointer w-full sm:w-[280px] xl:w-auto mb-2 xl:mb-0'>
                        <SearchBar />
                    </span>
                    <div className='flex flex-row items-center w-full xl:w-auto justify-center xl:justify-end'>
                        <DarkMode />
                        <button className='text-xl xl:text-2xl text-pink cursor-pointer dark:text-white ml-1 xl:ml-2'><i className='bx bx-bell'></i></button>
                        <button className='text-2xl xl:text-4xl text-pink cursor-pointer dark:text-white ml-1 xl:ml-2 flex items-center'><i className='bx bx-user'></i><span className='text-[14px] xl:text-[18px] ml-1'>Olá, Reabilitador</span></button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Topbar
