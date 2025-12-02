import React from 'react'
import { GrLinkedin, GrYoutube } from "react-icons/gr"
import { AiFillInstagram } from "react-icons/ai"
import { ImFacebook2 } from "react-icons/im"

export default function Footer() {
    return (
        <footer className='fixed bottom-0 z-50 flex flex-col items-center justify-center bg-light-gray w-full h-auto py-4 xl:flex-row xl:justify-evenly xl:items-center xl:h-[50px] xl:p-0'>

            <p className='text-gray font-normal text-[12px] text-center sm:text-[14px] lg:text-[14px] xl:text-[14px]'>&copy; Copyright {new Date().getFullYear()} MentalPlus&#174;.&nbsp;&nbsp;Todos os direitos reservados.</p>

            <nav className='mt-2 xl:mt-0'>
                <ul className='flex flex-inline items-center gap-2 xl:flex-row xl:justify-center xl:items-center xl:gap-3 text-gray'>
                    <li><p className='text-gray font-normal text-[16px] xl:text-[14px]'>Visite-nos:</p></li>
                    <li><a href="https://www.instagram.com/mentalplus_official/" target="_blank" rel="noopener noreferrer"><AiFillInstagram className='text-[29px] hover:text-blue transition duration-300' /></a></li>
                    <li><a href="https://www.facebook.com/appmentalplus/" target="_blank" rel="noopener noreferrer"><ImFacebook2 className='text-[20px] hover:text-blue transition duration-300' /></a></li>
                    <li><a href="https://www.linkedin.com/company/mentalplus%C2%AE/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><GrLinkedin className='text-[20px] hover:text-blue transition duration-300' /></a></li>
                    <li><a href="https://www.youtube.com/@MentalPlus_official" target="_blank" rel="noopener noreferrer"><GrYoutube className='text-[29px] hover:text-blue transition duration-300' /></a></li>
                </ul>
            </nav>

        </footer>
    )
}
