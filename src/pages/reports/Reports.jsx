import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollBar from '../../utils/ScrollBar'
import SearchBar from '../../Components/atoms/SearchBar'
import DefaultScreen from '../../Components/template/DefaultScreen'
import GeneralButton from '../../Components/atoms/GeneralButton'
import CardBoxBorder from '../../Components/organisms/CardBoxBorder'

const titulo = [
  { label: 'Nome' },
  { label: 'Data' },
]

const pacientenome = [
  { nome: 'João Silva Yokomizo Prata da Costa', data: '15/04/2025' },
  { nome: 'Maria de Souza Cuzcuz da Luz', data: '20/05/2025' },
  { nome: 'Carlos Lima', data: '10/06/2025' },
  { nome: 'Ana Paula', data: '25/06/2025' },
  { nome: 'Fernanda Dias', data: '30/06/2025' },
  { nome: 'Pedro Santos', data: '05/07/2025' },
  { nome: 'Lucas Oliveira', data: '10/07/2025' },
  { nome: 'Mariana Costa', data: '15/07/2025' },
  { nome: 'Roberto Almeida', data: '20/07/2025' },
  { nome: 'Juliana Rocha', data: '25/07/2025' },
  { nome: 'Ricardo Martins', data: '30/07/2025' },
  { nome: 'Tatiane Ferreira', data: '05/08/2025' },
  { nome: 'Gustavo Pereira', data: '10/08/2025' },
  { nome: 'Camila Santos', data: '15/08/2025' },
  { nome: 'André Lima', data: '20/08/2025' },
  { nome: 'Larissa Almeida', data: '25/08/2025' },
  { nome: 'Felipe Costa', data: '30/08/2025' },
  { nome: 'Bruna Rocha', data: '05/09/2025' },
  { nome: 'Eduardo Martins', data: '10/09/2025' },
  { nome: 'Patrícia Dias', data: '15/09/2025' },
  { nome: 'Vinícius Oliveira', data: '20/09/2025' },
  { nome: 'Sofia Souza', data: '25/09/2025' },
]

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPacientes = pacientenome.filter((item) => {
    const termo = searchTerm.toLowerCase();
    return (
      item.nome.toLowerCase().includes(termo) ||
      item.data.toLowerCase().includes(termo)
    );
  });

  const getPrimeiroUltimoNome = (nomeCompleto) => {
    const partes = nomeCompleto.trim().split(' ');
    if (partes.length === 1) return partes[0];
    return `${partes[0]} ${partes[partes.length - 1]}`;
  };

  return (
    <DefaultScreen
      body={
        <>
          <div className='flex flex-col justify-center items-center gap-y-6 xl:gap-y-13 mt-24 xl:mt-0'>

            <CardBoxBorder
              width='w-[300px] md:w-[620px] xl:w-[894px]'
              height='h-[700px] md:h-[710px]'
              padding='p-8 gap-x-8'
              margin='mb-8 lg:mb-10 xl:mb-0'
              children={
                <>
                  <div className='flex flex-col justify-between items-center w-full h-full'>
                    <h1 className='font-black text-[22px] xl:text-[28px] text-center text-gray dark:text-white xl:pb-12'>Meus Últimos Relatórios</h1>
                    <div className='flex flex-col w-full h-full gap-y-4 xl:gap-y-6 overflow-hidden'>
                      {/* Cabeçalho de títulos */}
                      <div className='flex flex-row w-full font-bold text-[15px] md:text-[20px] xl:text-[26px] text-gray dark:text-white mt-4 xl:mt-0 mb-2 pl-6 xl:pl-40 gap-x-0 xl:gap-x-44'>
                        <div className='flex-1 text-center pl-2'>{titulo[0].label}</div>
                        <div className='flex-1 text-center pl-24 xl:pl-0'>{titulo[1].label}</div>
                        <div className='w-[90px] xl:w-[120px]'></div>
                      </div>
                      {/* Lista de pacientes */}
                      <ScrollBar />
                      <div className='flex flex-col w-full sm:gap-y-2 max-h-[480px] md:max-h-[470px] xl:max-h-[300px] overflow-auto scrollbar-transparente'>
                        {filteredPacientes.map((item, index) => (
                          <div key={index} className='w-full'>
                            {/* Mobile: nome e data lado a lado, botão abaixo; Desktop: layout antigo */}
                            <div className='flex flex-row md:hidden w-full items-center'>
                              <div className='flex-1 flex justify-center items-center font-regular text-[13px] text-gray dark:text-white bg-light-gray dark:bg-gray rounded-tl-lg xl:rounded-t-lg h-[36px] gap-x-2 w-full'>
                                {getPrimeiroUltimoNome(item.nome)}
                              </div>
                              <div className='flex-1 flex items-center justify-center md:justify-end font-regular text-[13px] text-gray dark:text-white bg-light-gray dark:bg-gray rounded-tr-lg xl:rounded-t-lg h-[36px] w-full -pr-4 xl:pr-8'>
                                {item.data}
                              </div>
                            </div>
                            <div className='flex md:hidden w-full'>
                              <GeneralButton
                                label='Ver detalhes'
                                width='w-[250px]'
                                height='h-[32px] md:h-[40px]'
                                rounded="rounded-b-lg "
                              />
                            </div>
                            {/* Desktop e Tablet layout */}
                            <div className='hidden md:flex flex-row w-full items-center whitespace-nowrap overflow-x-auto'>
                              <div className='flex-1 flex items-center justify-center font-regular text-[16px] text-center text-gray dark:text-white bg-light-gray dark:bg-gray h-[40px] px-0 whitespace-nowrap overflow-hidden text-ellipsis rounded-l-lg'>
                                {getPrimeiroUltimoNome(item.nome)}
                              </div>
                              <div className='flex-1 flex items-center justify-center font-regular text-[16px] text-center text-gray dark:text-white bg-light-gray dark:bg-gray h-[40px] px-0 whitespace-nowrap overflow-hidden text-ellipsis'>
                                {item.data}
                              </div>
                              <div className='flex items-center justify-center h-[40px] bg-light-gray dark:bg-gray rounded-r-lg'>
                                <GeneralButton
                                  label='Ver detalhes'
                                  width='w-[120px]'
                                  height='h-[32px] md:h-[40px]'
                                  size='md:text-[16px]'
                                  margin='mt-0'
                                  rounded="rounded-r-lg whitespace-nowrap"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <span className='flex items-center gap-x-1 xl:gap-x-2 bg-white rounded-lg border border-pink dark:border-blue cursor-pointer w-[230px] sm:w-[440px] xl:w-auto -mb-2 xl:mb-0'>
                      <SearchBar
                        width='w-full'
                        widthxl='xl:w-[640px]'
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                      />
                    </span>
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

export default Reports
