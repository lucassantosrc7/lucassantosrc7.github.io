import React from 'react'
import { Link } from 'react-router-dom'
import ScrollBar from '../../utils/ScrollBar'
import DefaultScreen from '../../Components/template/DefaultScreen'
import GeneralButton from '../../Components/atoms/GeneralButton'
import CardBoxBorder from '../../Components/organisms/CardBoxBorder'

const pacientenome = [
  "João Silva",
  "Maria Oliveira",
  "Pedro Santos",
  "Ana Costa",
  "Lucas Pereira",
  "Fernanda Lima",
  "Carlos Almeida",
  "Juliana Rocha",
  "Mariana Dias",
  "Ricardo Martins",
  "Tatiane Ferreira",
  "Gabriel Souza",
  "Larissa Mendes",
  "Thiago Ribeiro",
  "Camila Nascimento",
  "Bruno Carvalho",
  "Aline Gomes",
  "Eduardo Pires",
  "Patrícia Teixeira",
  "Renato Barros",
  "Estevam 3D",
  "Lucas Silva and Silva",
  "Vinicius The Boss",
  "Dekos The Therapeuta",
]

const Patients = () => {
  // Função utilitária para extrair primeiro e último nome
  const getPrimeiroUltimoNome = (nomeCompleto) => {
    const partes = nomeCompleto.trim().split(/\s+/);
    if (partes.length === 1) return partes[0];
    return `${partes[0]} ${partes[partes.length - 1]}`;
  };
  // Divide o array em duas colunas para desktop, mas mantém uma coluna no mobile
  const middleIndex = Math.ceil(pacientenome.length / 2)
  const leftColumn = pacientenome.slice(0, middleIndex)
  const rightColumn = pacientenome.slice(middleIndex)

  return (
    <DefaultScreen
      body={
        <>
          <div className='flex flex-col justify-center items-center gap-y-6 xl:gap-y-13 mt-24 xl:mt-0'>
            <CardBoxBorder
              width='w-[300px] sm:w-[600px] xl:w-[894px]'
              height='h-[700px] xl:h-[535px]'
              padding='p-8 gap-x-8'
              children={
                <>
                  <div className='flex flex-col justify-center items-center w-full'>
                    <h1 className='font-black text-[22px] xl:text-[28px] text-center text-gray dark:text-white xl:pb-12'>Meus Pacientes</h1>
                    <ScrollBar />
                    {/* Mobile: uma coluna só, sem rolagem horizontal */}
                    <div className='flex flex-col w-full mt-6 max-h-[500px] xl:hidden overflow-y-auto scrollbar-transparente'>
                      {pacientenome.map((nome, index) => (
                        <div key={index} className='flex w-full'>
                          <h2 className='flex-1 flex justify-center items-center font-regular text-[14px] md:text-[16px] text-center text-gray dark:text-white bg-light-gray dark:bg-gray rounded-l-lg h-[32px] md:h-[40px]'>
                            {getPrimeiroUltimoNome(nome)}
                          </h2>
                          <GeneralButton
                            label='Ver detalhes'
                            width='w-[120px]'
                            height='h-[32px] md:h-[40px]'
                            size='text-[14px] md:text-[16px]'
                            rounded="rounded-r-lg whitespace-nowrap"
                            state={{ nome }}
                            onClick={() => window.location.href = '/pacientes_detalhes'}
                          />
                        </div>
                      ))}
                    </div>
                    {/* Desktop: duas colunas lado a lado */}
                    <div className='hidden xl:flex flex-row w-full justify-center items-start gap-x-8 max-h-[300px] overflow-auto scrollbar-transparente'>
                      <div className='flex flex-col w-full xl:w-1/2 items-center'>
                        {leftColumn.map((nome, index) => (
                          <div key={index} className='flex w-full'>
                            <h2 className='flex-1 flex justify-center items-center font-regular text-[14px] md:text-[16px] text-center text-gray dark:text-white bg-light-gray dark:bg-gray rounded-l-lg h-[32px] md:h-[40px]'>
                              {getPrimeiroUltimoNome(nome)}
                            </h2>
                            <GeneralButton
                              label='Ver detalhes'
                              width='w-[120px]'
                              height='h-[32px] md:h-[40px]'
                              size='text-[14px] md:text-[16px]'
                              rounded="rounded-r-lg whitespace-nowrap"
                              state={{ nome }}
                              onClick={() => window.location.href = '/pacientes_detalhes'}
                            />
                          </div>
                        ))}
                      </div>
                      <div className='flex flex-col w-full xl:w-1/2 items-center'>
                        {rightColumn.map((nome, index) => (
                          <div key={index} className='flex w-full'>
                            <h2 className='flex-1 flex justify-center items-center font-regular text-[14px] md:text-[16px] text-center text-gray dark:text-white bg-light-gray dark:bg-gray rounded-l-lg h-[32px] md:h-[40px]'>
                              {getPrimeiroUltimoNome(nome)}
                            </h2>
                            <GeneralButton
                              label='Ver detalhes'
                              width='w-[120px]'
                              height='h-[32px] md:h-[40px]'
                              size='text-[14px] md:text-[16px]'
                              rounded="rounded-r-lg whitespace-nowrap"
                              state={{ nome }}
                              onClick={() => window.location.href = '/pacientes_detalhes'}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              }
            />
            <GeneralButton
              width="w-[220px] xl:w-[386px]"
              height="h-[60px]"
              margin='xl:-ml-126 mb-12 xl:mb-0'
              label="Cadastrar Novo Paciente"
              onClick={() => window.location.href = '/pacientes_cadastrar'}
            />
          </div>
        </>
      }
    />
  )
}

export default Patients
