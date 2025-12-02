import React from 'react'
import { useNavigate } from 'react-router-dom'
import GeneralButton from '../atoms/GeneralButton'

const BackButton = () => {

    const navigate = useNavigate()

    return (
        <GeneralButton
            width="w-[140px] xl:w-[153px]"
            height="h-[60px]"
            label={
                <span className="flex items-center justify-center">
                    <i className="bx bx-home text-white text-[22px] mr-2"></i>
                    <span className="text-white text-[18px] font-medium cursor-pointer">Voltar</span>
                </span>
            }
            onClick={() => navigate(-1)}
        />
    )
}

export default BackButton
