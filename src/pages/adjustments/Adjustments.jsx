import React from 'react'
import { Link } from "react-router-dom"
import DefaultScreen from '../../Components/template/DefaultScreen'
import CardBoxBorder from '../../Components/organisms/CardBoxBorder'
import Avatar from '../../Components/atoms/Avatar'
import BackButton from '../../Components/molecule/BackButton'
import GeneralButton from '../../Components/atoms/GeneralButton'

const Adjustments = () => {
  return (
    <DefaultScreen
      body={
        <>
          <div className='flex flex-col justify-center items-center gap-y-6 xl:gap-y-13 mt-24 xl:mt-0'>
            <CardBoxBorder
              width='w-[300px] sm:w-[320px] lg:w-[650px] xl:w-[894px]'
              height='h-[700px] xl:h-[535px]'
              padding='p-8 gap-x-8'
              children={
                <>
                  <div className="flex flex-col lg:flex-row justify-center items-center mt-8 mb-4 text-center gap-6">
                    <Avatar />
                    <h1 className="text-[20px] lg:text-[24px] font-bold text-gray dark:text-white">
                      Logado como <span className="block">joao@mentalplus.app</span>
                    </h1>
                  </div>
                  <div className='flex flex-col lg:flex-row justify-center items-center mt-16 lg:mt-28 text-center gap-4'>
                    <GeneralButton
                      width="w-[140px]"
                      height="h-[40px]"
                      label="Trocar Senha"
                    />
                    <GeneralButton
                      width="w-[140px]"
                      height="h-[40px]"
                      label="Deletar Conta"
                    />
                    <GeneralButton
                      width="w-[140px]"
                      height="h-[40px]"
                      label="Logout"
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between items-center w-full mt-20 lg:mt-40 gap-y-2">
                    <Link
                      to="/politica"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink hover:text-blue dark:text-blue dark:hover:text-pink text-[14px] sm:text-[16px]"
                    >
                      Política de Privacidade
                    </Link>

                    <Link
                      to="/eula"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink hover:text-blue dark:text-blue dark:hover:text-pink text-[14px] sm:text-[16px]"
                    >
                      Acordo de Licença do Usuário Final
                    </Link>
                  </div>
                </>
              }
            />
            <div className='mb-12 sm:mb-12 lg:mb-10 xl:mb-0'>
              <BackButton />
            </div>
          </div>
        </>
      }
    />
  )
}

export default Adjustments
