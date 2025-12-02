import React, { useState } from 'react'
import axios from 'axios'
import Footer from '../../Components/template/Footer'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import GeneralButton from '../../Components/atoms/GeneralButton'
import CardBox from '../../Components/organisms/CardBox'
import InputsForm from '../../Components/molecule/InputsForm'

const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    }
    var chamada = false;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (chamada == true) {
            alert('Aguarde um momento!')
            return;
        }

        try {
            chamada = true;

            const mentalPlusEndpoint = "https://stage.mentalplus.app"

            const axiosInstance = axios.create({
                baseURL: mentalPlusEndpoint,
            });

            let params = new URLSearchParams();
            params.append("email", email);
            params.append("password", senha);
            const resposta = await axiosInstance.post(
                `${mentalPlusEndpoint}/login/index.php`,
                params
            );
            console.log(resposta.data);
            if (resposta.data.success == false) {
                alert('Falha ao Logar, verifique e-mail e senha!')
            }
            else {
                window.location.href = '/dashboard'
            }
        }

        catch (error) {
            console.log(error)
            alert('Falha ao Logar, verifique e-mail e senha!')
        }

        chamada = false
    }

    return (
        <>
            <div className='block justify-center lg:min-h-screen lg:flex lg:items-end xl:flex xl:flex-inline xl:justify-evenly bg-[url(/wave.svg)] bg-fixed bg-no-repeat bg-cover'>

                <div className='items-center justify-center'>
                    <img src='/images/NEW-LOGO-MP.webp' alt="Logo MentalPlus®" className='z-20 ml-36 pt-10 sm:ml-80 lg:ml-8 lg:-mb-40 xl:-mb-50 xl:ml-10 xl:pt-42' />
                    <img src='/images/REABILITADORA_MP03-1.webp' alt="Reabilitadora MentalPlus®" className='w-[280px] mb-10 ml-20 mask-b-from-90% xl:mask-b-from-100% lg:w-[480px] sm:ml-65 lg:ml-12 xl:ml-14' />
                </div>

                <div className='flex flex-col justify-center items-center gap-4 pb-8 xl:pt-2'>

                    <h1 className='text-blue text-[60px] font-black xl:text-[80px] xl:mt-14'>Bem Vindo</h1>

                    <hr className='w-80 xl:w-120 h-[1px] bg-pink border-0 rounded-sm' />

                    <p className='text-gray font-medium'>Seja muito bem vindo a área do reabilitador aqui<br /> você poderá encontrar todas suas informações.</p>

                    <CardBox
                        width="w-[400px] md:w-[480px] xl:w-[546px]"
                        height="h-[347px]"
                        bgColor="bg-painel"
                        children={
                            <>
                                <h1 className='text-blue text-4xl font-bold'>Entrar</h1>

                                <form onSubmit={handleSubmit}>
                                    <div className='flex flex-col justify-center items-center gap-6'>
                                        <InputsForm
                                            title="E-mail"
                                            type="email"
                                            id='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            width="w-[356px]"
                                            height={[25]}
                                        />

                                        <div className='relative'>
                                            <InputsForm
                                                title="Senha"
                                                type={showPassword ? "text" : "password"}
                                                id='senha'
                                                value={senha}
                                                onChange={(e) => setSenha(e.target.value)}
                                                width="w-[356px]"
                                                height={[25]}
                                            />
                                            <span
                                                className='absolute right-2 -bottom-1 transform -translate-y-1/2 cursor-pointer text-18px text-pink hover:text-blue'
                                                onClick={togglePasswordVisibility}
                                                style={{ zIndex: 2 }}
                                            >
                                                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                            </span>
                                        </div>
                                        
                                        <div className='flex justify-between items-center gap-2'>
                                            <GeneralButton
                                                width="w-[166px]"
                                                height="h-[46px]"
                                                label="Acessar"
                                                onClick={handleSubmit}
                                            />
                                            <GeneralButton
                                                width="w-[166px]"
                                                height="h-[46px]"
                                                label="Primeira vez?"
                                                onClick={() => window.open("/Cadastro", "_self")}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </>
                        }
                    />

                    <p className='text-gray font-medium py-5'>Caso ainda não seja um reabilitado <br /> MentalPlus&#174; clique no botão abaixo</p>

                    <GeneralButton
                        width="w-[261px]"
                        height="h-[46px]"
                        margin='mb-28 md:mb-22 lg:mb-20 xl:mb-16'
                        label="Torne-se um Reabilitador"
                        onClick={() => window.open("/torne", "_blank")}
                    />

                </div>

            </div>

            <div className='bottom-0 fixed w-full z-20'>
                <Footer />
            </div>

        </>

    )
}

export default Login
