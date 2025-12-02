import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import DefaultScreen from '../../Components/template/DefaultScreen'
import GeneralButton from '../../Components/atoms/GeneralButton'
import BackButton from '../../Components/molecule/BackButton'
import CardBoxBorder from '../../Components/organisms/CardBoxBorder'
import InputsForm from '../../Components/molecule/InputsForm'
import SelectForm from '../../Components/molecule/SelectForm'
import Avatar from '../../Components/atoms/Avatar'


const PatientDetails = () => {
    const location = useLocation();
    const nomePaciente = location.state?.nome || 'Paciente não informado';

    const [nome, setNome] = useState('')
    const [escolaridade, setEscolaridade] = useState('')
    const [telefone, setTelefone] = useState('')
    const [profissao, setProfissao] = useState('')
    const [lateralidade, setLateralidade] = useState('')
    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')
    const [genero, setGenero] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')

    const handleDelete = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica de exclusão, como chamada de API
        alert('Paciente excluído!');
    };

    const handleEdit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica de atualização, como chamada de API
        alert('Dados do paciente atualizados com sucesso!');
    };


    return (
        <DefaultScreen
            body={
                <>
                    <div className='flex flex-col justify-center items-center gap-y-6 xl:gap-y-13 mt-24 xl:mt-0'>
                        <CardBoxBorder
                            width='w-[300px] sm:w-[600px] xl:w-[994px]'
                            height='h-[1020px] min-h-[535px] xl:h-[335px]'
                            padding='p-7 xl:p-12 gap-x-8'
                            children={
                                <>
                                    <form action="">
                                        <div className="flex flex-col xl:flex-row gap-x-8 w-full max-w-3xl">
                                            <div className="flex flex-col xl:-ml-16 xl:mr-4 justify-center xl:justify-start items-center xl:items-start mb-4 text-center">
                                                <Avatar />
                                                <h1 className="text-[22px] font-bold text-gray dark:text-white mt-4">{nomePaciente}</h1>
                                            </div>
                                            {/* Coluna Esquerda */}
                                                <div className="flex flex-col gap-y-4 w-full xl:w-1/2 ">

                                                    <InputsForm
                                                        title="Nome Completo"
                                                        type="text"
                                                        id="nome"
                                                        value={nome}
                                                        onChange={(e) => setNome(e.target.value)}
                                                        textColor='text-gray'
                                                        width="w-full sm:w-[356px]"
                                                        height={[25]}
                                                    />

                                                    <SelectForm
                                                        title='Escolaridade'
                                                        id='escolaridade'
                                                        value={escolaridade}
                                                        onChange={(e) => setEscolaridade(e.target.value)}
                                                        options={[
                                                            { value: "", label: "Selecione" },
                                                            { value: "Ensino Fundamental Incompleto", label: "Ensino Fundamental Incompleto" },
                                                            { value: "Ensino Fundamental Completo", label: "Ensino Fundamental Completo" },
                                                            { value: "Ensino Médio Incompleto", label: "Ensino Médio Incompleto" },
                                                            { value: "Ensino Médio Completo", label: "Ensino Médio Completo" },
                                                            { value: "Superior Incompleto", label: "Superior Incompleto" },
                                                            { value: "Superior Completo", label: "Superior Completo" },
                                                            { value: "Pós-graduação", label: "Pós-graduação" },
                                                            { value: "Mestrado", label: "Mestrado" },
                                                            { value: "Doutorado", label: "Doutorado" },
                                                        ]}
                                                        textColor='text-gray'
                                                        width="w-full sm:w-[356px]"
                                                        height={[25]}
                                                    />


                                                    <InputsForm
                                                        title='Telefone'
                                                        type='tel'
                                                        id='telefone'
                                                        value={telefone}
                                                        onChange={(e) => setTelefone(e.target.value)}
                                                        textColor='text-gray'
                                                        width="w-full sm:w-[356px]"
                                                        height={[25]}
                                                        placeholder="(99) 99999-9999"
                                                    />

                                                    <div className='mb-4'>
                                                        <div className="flex flex-col xl:flex-row gap-x-4 gap-y-4">
                                                            <div className="flex flex-col w-full xl:w-1/2">

                                                                <InputsForm
                                                                    title='Profissão'
                                                                    type='text'
                                                                    id='profissao'
                                                                    value={profissao}
                                                                    onChange={(e) => setProfissao(e.target.value)}
                                                                    textColor='text-gray'
                                                                    width="w-full"
                                                                    height={[25]}
                                                                />

                                                            </div>
                                                            <div className="flex flex-col w-full xl:w-1/2">
                                                                <SelectForm
                                                                    title='Lateralidade'
                                                                    id="lateralidade"
                                                                    value={lateralidade}
                                                                    onChange={(e) => setLateralidade(e.target.value)}
                                                                    options={[
                                                                        { value: "", label: "Selecione" },
                                                                        { value: "Direita", label: "Direita" },
                                                                        { value: "Esquerda", label: "Esquerda" }
                                                                    ]}
                                                                    textColor='text-gray'
                                                                    width='w-full'
                                                                    height={[25]}
                                                                />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                {/* Coluna Direita */}
                                                <div className="flex flex-col gap-y-4 w-full xl:w-1/2 text-gray dark:text-white">
                                                    <InputsForm
                                                        title='CPF'
                                                        type='text'
                                                        id='cpf'
                                                        value={cpf}
                                                        onChange={(e) => setCpf(e.target.value)}
                                                        textColor='text-gray'
                                                        placeholder="999.999.999-99"
                                                        width="w-full sm:w-[356px]"
                                                        height={[25]}
                                                    />

                                                    <InputsForm
                                                        title='RG'
                                                        type='text'
                                                        id='rg'
                                                        value={rg}
                                                        onChange={(e) => setRg(e.target.value)}
                                                        textColor='text-gray'
                                                        placeholder="99.999.999-9"
                                                        width="w-full sm:w-[356px]"
                                                        height={[25]}
                                                    />

                                                    <InputsForm
                                                        title='Gênero'
                                                        type='text'
                                                        id='genero'
                                                        value={genero}
                                                        onChange={(e) => setGenero(e.target.value)}
                                                        textColor='text-gray'
                                                        width="w-full sm:w-[356px]"
                                                        height={[25]}
                                                    />

                                                    <InputsForm
                                                        title='Data de Nascimento'
                                                        type='date'
                                                        id='dataNascimento'
                                                        value={dataNascimento}
                                                        onChange={(e) => setDataNascimento(e.target.value)}
                                                        textColor='text-gray'
                                                        width="w-full sm:w-[356px]"
                                                        height={[25]}
                                                    />
                                            </div>
                                        </div>
                                        <div className="flex gap-x-4 mt-6 xl:-mr-8 justify-center xl:justify-end">
                                            <GeneralButton
                                                width="w-[120px] sm:w-[140px]"
                                                height="h-[40px]"
                                                label="Editar"
                                                onClick={handleEdit}
                                                bgColor="bg-gray"
                                                darkBgColor='dark:bg-gray'
                                                hoverBgColor="hover:bg-dark-gray"
                                                hoverDarkBgColor="hover:dark:bg-light-gray"
                                            />
                                            <GeneralButton
                                                width="w-[120px] sm:w-[140px]"
                                                height="h-[40px]"
                                                label="Excluir"
                                                onClick={handleDelete}
                                            />
                                        </div>
                                    </form>
                                </>
                            }
                        />
                        <div className='mb-12 sm:mb-12 xl:mb-0'>
                            <BackButton />
                        </div>
                    </div>
                </>
            }
        />
    )
}

export default PatientDetails
