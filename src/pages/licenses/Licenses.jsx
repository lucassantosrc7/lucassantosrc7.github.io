import React from 'react'
import DefaultScreen from '../../Components/template/DefaultScreen'
import SpecialButton from '../../Components/atoms/SpecialButton'
import CardBoxBorder from '../../Components/organisms/CardBoxBorder'

const titulo = [
    { label: 'Paciente' },
    { label: 'Data' },
    { label: 'Licença' },
]

const conteudo = [
    { nome: 'João Silva', data: '15/04/2025', label: 'Avaliação' },
    { nome: 'Maria Souza', data: '20/05/2025', label: 'Reabilitação' },
    { nome: 'Carlos Lima', data: '10/06/2025', label: 'Avaliação' },
    { nome: 'Ana Paula', data: '25/06/2025', label: 'Reabilitação' },
    { nome: 'Fernanda Dias', data: '30/06/2025', label: 'Avaliação' },
    { nome: 'Pedro Santos', data: '05/07/2025', label: 'Reabilitação' },
]

const Licenses = () => {
    return (
        <DefaultScreen
            body={
                <>
                    <div className='flex flex-col justify-center items-center gap-y-6 xl:gap-y-13 mt-24 xl:mt-0'>
                        <CardBoxBorder
                            flexibility='flex-inline'
                            width='w-[300px] sm:w-[320px] xl:w-[470px]'
                            height='h-[204px] xl:h-[204px]'
                            padding='p-8'
                            children={
                                <>
                                    <div className='flex flex-col justify-center items-center'>
                                        <h1 className='font-black text-[16px] xl:text-[26px] text-center text-gray dark:text-white'>Minhas Reabilitações</h1>
                                        <h2 className='font-bold text-[48px] text-center text-pink dark:text-white'>5</h2>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <h1 className='font-black text-[16px] xl:text-[26px] text-center text-gray dark:text-white'>Reabilitações em Andamento</h1>
                                        <h2 className='font-bold text-[48px] text-center text-pink dark:text-white'>10</h2>
                                    </div>
                                </>
                            }
                        />
                        <CardBoxBorder
                            flexibility='flex-inline'
                            width='w-[300px] sm:w-[320px] xl:w-[470px]'
                            height='h-[204px] xl:h-[247px]'
                            padding='p-8'
                            children={
                                <>
                                    <div className='flex flex-col justify-center items-center'>
                                        <h1 className='font-black text-[16px] xl:text-[26px] text-center text-gray dark:text-white'>Minhas Avaliações</h1>
                                        <h2 className='font-bold text-[48px] text-center text-pink dark:text-white'>10</h2>
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <h1 className='font-black text-[16px] xl:text-[26px] text-center text-gray dark:text-white'>Pacientes Avaliados</h1>
                                        <h2 className='font-bold text-[48px] text-center text-pink dark:text-white'>10</h2>
                                    </div>
                                </>
                            }
                        />
                        <SpecialButton
                            label='Upgrade de Plano'
                            size='text-[20px] xl:text-[26px]'
                            width='w-[300px] sm:w-[320px] xl:w-[470px]'
                            height='h-[115px]'
                        />
                    </div>
                    <div className='flex justify-center items-center mt-6 xl:mt-0 bg-light-gray dark:bg-gray'>
                        <CardBoxBorder
                            width='w-[300px] sm:w-[320px] xl:w-[539px]'
                            height='h-[674px] xl:h-[674px]'
                            padding='p-8 gap-y-4 gap-x-8'
                            margin='mb-12 sm:mb-12 lg:mb-10 xl:mb-0'
                            children={
                                <>
                                    <h1 className='font-black text-[26px] xl:text-[32px] text-center text-gray dark:text-white mb-8'>Últimas licenças utilizadas</h1>
                                    <div className='flex flex-row justify-between items-center w-[260px] xl:w-[500px] gap-x-8 font-bold text-[18px] xl:text-[26px] text-center text-gray dark:text-white'>
                                        {titulo.map((item, idx) => (
                                            <h2 key={idx} className={
                                                idx === 0 ? 'w-1/3 text-left' : idx === 1 ? 'w-1/3 text-center' : 'w-1/3 text-right'
                                            }>{item.label}</h2>
                                        ))}
                                    </div>
                                    <div className='flex flex-col w-full items-center'>
                                        {conteudo.map((item, idx) => (
                                            <div key={idx} className='flex flex-row justify-between items-center bg-light-gray dark:bg-gray rounded-lg w-[260px] xl:w-[500px] h-[38px] font-light text-gray dark:text-white text-[12px] xl:text-[18px] my-4 px-4'>
                                                <span className='w-1/3 text-left'>{item.nome}</span>
                                                <span className='w-1/3 text-center'>{item.data}</span>
                                                <span className='w-1/3 text-right'>{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            }
                        />
                    </div>
                </>
            }
        />
    )
}

export default Licenses
