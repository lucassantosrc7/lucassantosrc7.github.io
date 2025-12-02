import React from 'react'
import DefaultSite from '../../Components/template/DefaultSite.jsx'
import GeneralButton from '../../Components/atoms/GeneralButton.jsx'
import Accordion from '../../Components/organisms/Accordion.jsx'
import { supportItems as items } from '../../utils/SupportItems.jsx';


const Support = () => {
    return (
        <DefaultSite>
            <div className="flex justify-around items-center mx-6 -mt-14 sm:mx-8 sm:-mt-30 lg:mx-6 lg:-mt-70 xl:mx-40 xl:-mt-80">
                <div className="flex flex-col items-start text-left">
                    <h1 className="font-black text-[30px] sm:text-[54px] lg:text-[70px] xl:text-[80px] text-fuscous-gray">
                        Suporte
                    </h1>

                    <h2 className="font-bold text-blue text-[17px] sm:text-[30px] lg:text-[38px] xl:text-[45px]">
                        Precisa de ajuda?
                    </h2>

                    <h3 className="font-regular text-fuscous-gray text-[12px] sm:text-[22px] lg:text-[28px] xl:text-[30px]">
                        Acesse o guia de instalação
                    </h3>

                    <h3 className="font-black text-fuscous-gray text-[12px] sm:text-[22px] lg:text-[18px] xl:text-[20px] mt-6 sm:mt-4 lg:mt-4 xl:mt-8">
                        Para saber mais clique
                    </h3>

                    <GeneralButton
                        width="w-[130px] sm:w-[180px] lg:w-[200px] xl:w-[239.46px]"
                        height="h-[45px] sm:h-[60px] lg:h-[65px] xl:h-[85px]"
                        size="text-[20px] sm:text-[26px] lg:text-[30px] xl:text-[32px]"
                        weight="font-black"
                        bgColor="bg-light-blue"
                        hoverBgColor="hover:bg-muted-gray"
                        label="AQUI"
                        onClick={() =>
                            window.open(
                                '/PDFs/Guia_de_instalacao_MP_curso_imersao_03.pdf',
                                '_blank'
                            )
                        }
                    />
                </div>
                <div>
                    <div className='w-[200px] sm:w-[310px] lg:w-[500px] xl:w-[600px] mt-20 sm:mt-40 lg:mt-80 xl:mt-100'>
                        <img src="/images/Group1500.webp" alt="Brainy" />
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center ml-2 -mt-12 sm:-ml-30 sm:-mt-16 lg:-ml-118 lg:-mt-80 xl:-ml-140 xl:-mt-80'>
                <div className="flex flex-col items-start text-left">
                    <h2 className="font-black text-fuscous-gray text-[17px] sm:text-[30px] lg:text-[38px] xl:text-[45px]">
                        Mais Duvidas?
                    </h2>

                    <Accordion items={items} />
                </div>
            </div>
        </DefaultSite>
    )
}

export default Support
