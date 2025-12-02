import React, { useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import Footer from '../../Components/template/Footer'
import GeneralButton from '../../Components/atoms/GeneralButton'
import CardBox from '../../Components/organisms/CardBox'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import InputsForm from '../../Components/molecule/InputsForm'

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [codigo, setCodigo] = useState('');
  const [concordo, setConcordo] = useState(false);
  var chamada = false;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (chamada == true) {
      alert('Aguarde um momento!')
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    try {
      chamada = true;

      const mentalPlusEndpoint = "https://stage.mentalplus.app";

      const axiosInstance = axios.create({
        baseUrl: mentalPlusEndpoint,
      });

      let params = new URLSearchParams();
      params.append("email", email);
      params.append("password", senha);
      const resposta = await axiosInstance.post(
        `${mentalPlusEndpoint}/register/index.php`,
        params
      );

      const registrodados = resposta.data;
      console.log(resposta.data);

      try {
        console.log("Registrar uid " + registrodados.uId);
        params = new URLSearchParams();

        params.append("email", email);
        params.append("nome", nome);
        params.append("certificate", codigo)
        params.append("user_id", registrodados.uId)
        params.append("token", registrodados.token)
        params.append("action", 'register')

        const resposta = await axiosInstance.post(
          `${mentalPlusEndpoint}/users/index.php`,
          params
        );
        console.log(resposta.data);

        if (resposta.data.success == false) {
          alert('Falha ao registrar!')
        }
        else {
          window.location.href = '/dashboard';
        }
      }

      catch (error) {
        console.log(error)
        alert('Falha ao registrar!')
      }
    }

    catch (error) {
      console.log(error)
    }

    chamada = false;
  }

  return (
    <section className='block justify-center lg:min-h-screen lg:flex lg:items-end xl:flex xl:flex-inline xl:justify-evenly bg-[url(/wave.svg)] bg-fixed bg-no-repeat bg-cover'>

      <div className='ml-0 xl:ml-30 lg:mb-40 xl:mb-30'>

        <img src='/images/NEW-LOGO-MP.webp' alt="Logo MentalPlus" className='ml-34 pt-10 mb-6 xl:mb-6 ml-0 sm:ml-85 lg:ml-28 xl:ml-0 xl:pt-0' />

        <h1 className='text-blue text-[60px] xl:text-[80px] font-black leading-[60px] xl:leading-[80px] text-center xl:text-left mb-8 xl:mb-8'>Vamos <br /> Começar?</h1>

        <hr className='w-80 xl:w-70 h-[1px] bg-pink border-0 mb-6 ml-0 sm:ml-60 lg:ml-4 xl:ml-0' />

        <p className='text-gray font-medium mb-4 text-center xl:text-left'>Em primeiro lugar gostaríamos de dizer <br /> que estamos felizes em te ver por aqui. </p>

        <p className='text-gray font-medium mb-4 text-center xl:text-left'>Agora para você começar a utilizar todo o seu <br /> potencial como reabilitador MentalPlus&#174; você <br /> precisa somente preencher o formulário ao lado.</p>

        <p className='text-gray font-medium mb-4 text-center xl:text-left'>Caso ainda não seja um reabilitador <br /> MentalPlus&#174; clique no botão abaixo.</p>

        <h3 className='text-pink font-black mb-8 text-center xl:text-left'>Vamos começar?</h3>

        <GeneralButton
          width="w-[261px]"
          margin='ml-16 sm:ml-70 lg:ml-12 xl:ml-0 xl:mb-14'
          height="h-[46px]"
          label="Torne-se um Reabilitador"
          onClick={() => window.open("/torne", "_blank")}
        />
      </div>

      <div className='flex flex-col items-center m-20 lg:m-0 pb-20 lg:ml-10 xl:ml-0 xl:pb-0 mt-16 sm:mt-18 xl:mt-18 lg:-mb-6 xl:mb-45'>

        <h1 className='text-blue text-center text-[34px] sm:text-[40px] font-black mb-6 -mt-6'>CADASTRE-SE</h1>

        <CardBox
          width="w-[390px] sm:w-[546px] xl:w-[546px]"
          height="h-[584px]"
          margin='mb-12 xl:mb-0'
          padding='pt-22'
          bgColor="bg-painel"
          children={
            <>
              <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-6'>
                <InputsForm
                  title="Nome Completo"
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  width="w-[356px]"
                  height={[25]}
                />
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
                <div className='relative'>
                  <InputsForm
                    title="Confirme sua Senha"
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmarSenha"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    width="w-[356px]"
                    height={[25]}
                  />
                  <span
                    className='absolute right-2 -bottom-1 transform -translate-y-1/2 cursor-pointer text-18px text-pink hover:text-blue'
                    onClick={toggleConfirmPasswordVisibility}
                    style={{ zIndex: 2 }}
                  >
                    {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </span>
                </div>
                <InputsForm
                  title="Código do seu certificado MentalPlus&#174;"
                  type="text"
                  id="codigo"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                  width="w-[356px]"
                  height={[25]}
                />

                <div className='flex flex-inline gap-2'>
                  <InputsForm
                    type="checkbox"
                    id="concordo"
                    checked={concordo}
                    onChange={(e) => setConcordo(e.target.checked)}

                  />
                  <label htmlFor="concordo" className='z-20'>
                    <span className='text-gray'>Li e aceito o &nbsp;</span>
                    <Link
                      to="/eula"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue hover:text-pink transition duration-300"
                    >
                      Acordo de licença do usuário final
                    </Link>
                    <br />

                    <span className="text-gray">
                      e concordo com os &nbsp;
                    </span>

                    <Link
                      to="/politica"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue hover:text-pink"
                    >
                      Termos de privacidade
                    </Link>
                  </label>
                </div>

                <GeneralButton
                  width="w-[166px]"
                  height="h-[46px]"
                  margin='mb-24'
                  label="Continuar"
                  type="submit"
                />

                <img src='/images/Group-1225.webp' alt="Mr. Brainy" className='absolute w-[140px] h-[93px] xl:w-[280px] xl:h-[196px] mt-130 ml-60 sm:mt-104 sm:ml-80 lg:mt-116 lg:ml-80 xl:ml-100' />

              </form>
            </>
          }
        />

      </div>

      <div className='bottom-0 fixed w-full z-40'>
        <Footer />
      </div>
    </section>
  )
}
