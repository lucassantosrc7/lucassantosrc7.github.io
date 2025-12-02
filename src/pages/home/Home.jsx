import React, { useState, useEffect } from 'react';
import DefaultSite from '../../Components/template/DefaultSite.jsx';
import Banner from '../../Components/template/Banner.jsx';
import GeneralButton from '../../Components/atoms/GeneralButton.jsx'
import Calendly from '../../Components/organisms/Calendly.jsx';

// ⭐ IMPORTAÇÃO DO POPUP
import PopUp_Natal from '../../Components/organisms/PopUp_Natal.jsx';

const Home = () => {

  // ⭐ ESTADO QUE CONTROLA O POPUP
  const [selectPopUp_Natal, setSelectPopUp_Natal] = useState(false);

  // ⭐ ABRIR O POPUP 3 SEGUNDOS DEPOIS DO CARREGAMENTO
  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectPopUp_Natal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DefaultSite>

      {/* ⭐ RENDERIZAÇÃO DO POPUP */}
      {selectPopUp_Natal && (
        <PopUp_Natal onClose={() => setSelectPopUp_Natal(false)} />
      )}

      {/* 🔹 Seção Home */}
      <section id="home">
        <div className='flex flex-col'>
          <Banner />

          <div className='relative flex justify-center items-center -mt-14 -mb-14 sm:-mt-18 sm:-mb-30 lg:-mt-30 lg:-mb-39 xl:-mt-50 xl:-mb-55 z-10'>
            <video
              src="/images/Tematico/LOGO_KV_NATAL_MP2025__1.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-[130px] sm:w-[220px] lg:w-[320px] xl:w-[490px]"
            />
          </div>
        </div>

        <div className="flex justify-center items-center bg-gray92 py-20 relative">
          <div className="relative flex flex-col items-start text-left -mt-2 sm:mt-4 lg:-mt-14 ml-10 sm:ml-14 lg:ml-10 xl:ml-10 z-40">
            <h1 className="font-black text-[30px] sm:text-[54px] lg:text-[70px] xl:text-[80px] text-fuscous-gray">
              Bem Vindo!
            </h1>

            <h2 className="font-regular text-pink text-[17px] sm:text-[30px] lg:text-[38px] xl:text-[45px]">
              AVALIE E REABILITE
            </h2>

            <h3 className="font-black text-fuscous-gray text-[12px] sm:text-[22px] lg:text-[28px] xl:text-[32px]">
              SUAS FUNÇÕES COGNITIVAS!
            </h3>

            <h3 className="font-regular text-fuscous-gray text-[12px] sm:text-[22px] lg:text-[28px] xl:text-[32px] tracking-[3px] sm:tracking-[6px] lg:tracking-[9px] xl:tracking-[9px] mb-4 sm:mb-8 lg:mb-10 xl:mb-14">
              EM ATÉ 30 MINUTOS
            </h3>

            <div className="flex flex-col gap-4 mb-6 relative">
              <div className="flex flex-row gap-4 mb-8">
                <a
                  href="https://apps.apple.com/us/app/mentalplus/id6444049784"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:scale-105"
                >
                  <img
                    src="/images/applestore.webp"
                    alt="Available on the App Store"
                    className="w-[80px] sm:w-[139px] lg:w-[159px] xl:w-[179px]"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.MentalPlus.MentalPlus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:scale-105"
                >
                  <img
                    src="/images/googleplay.webp"
                    alt="Available on Google Play"
                    className="w-[80px] sm:w-[139px] lg:w-[159px] xl:w-[179px]"
                  />
                </a>
              </div>

              <span className="absolute -bottom-12 sm:-bottom-12 lg:-bottom-14 xl:-bottom-16 w-[310px] sm:w-[520px] lg:w-[700px] xl:w-[860px] text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[17px] text-muted-gray">
                <strong>O uso não autorizado do MentalPlus&#174; é proibido</strong>. A automedicação pode ser perigosa para sua saúde. Consulte um reabilitador credenciado antes de iniciar qualquer tratamento com este instrumento ou similares. Sua saúde e bem-estar são prioridades.
              </span>
            </div>
          </div>

          <div className="relative flex justify-center items-center z-40">
            {/*<img
              src="/images/DR_BRAINY 1.webp"
              alt="Dr. Brainy"
              className="relative z-10 w-[208px] sm:w-[415px] lg:w-[515px] xl:w-[615px] -mt-44 -ml-8 sm:-mt-40 sm:ml-8 lg:-mt-46 lg:ml-10 xl:-mt-50 xl:ml-40"
            />*/}
            {/* Brainy Natal */}
            <img
              src="/images/Tematico/Brainy_Natal.webp"
              alt="Dr. Brainy"
              className="relative z-10 w-[208px] sm:w-[415px] lg:w-[515px] xl:w-[615px] -mt-44 -ml-8 sm:-mt-40 sm:ml-8 lg:-mt-46 lg:ml-10 xl:-mt-50 xl:ml-40"
            />
            <img
              src="/images/Mask_group.webp"
              alt="Mask"
              className="absolute mt-4 ml-12 sm:mt-76 sm:ml-56 lg:mt-94 lg:ml-70 xl:mt-114 xl:ml-110 w-[80px] sm:w-[194px] lg:w-[208px] xl:w-[225px] z-0"
            />
          </div>
        </div>

      </section>

      {/* 🔹 Seção Quem Somos */}
      <section
        id="quem-somos"
        className="flex flex-col sm:flex-row justify-center items-center bg-[url('/images/Rectangle736.webp')] bg-cover bg-[center_100%] bg-no-repeat w-full relative"
      >
        <div className="flex flex-col items-start text-left -ml-4 sm:ml-12 lg:ml-10 xl:ml-24 -mt-2 sm:-mt-6 lg:-mt-20 xl:-mt-20">
          <h1 className="text-fuscous-gray text-[30px] sm:text-[54px] lg:text-[70px] xl:text-[80px] font-black leading-[1.1] mb-4">
            Quem Somos?
          </h1>
          <p className="text-fuscous-gray font-black text-[12px] sm:text-[20px] lg:text-[32px] xl:text-[40px] leading-tight mb-0 sm:-mb-1 lg:-mb-2 xl:-mb-2">
            MentalPlus&#174; é uma ferramenta
          </p>
          <p className="text-light-blue font-black text-[12px] sm:text-[20px] lg:text-[32px] xl:text-[36px] leading-tight mb-4">
            que avalia as funções cognitivas.
          </p>

          {/* 🔹 Versão MOBILE (sem <br />) */}
          <p className="block sm:hidden w-[300px] font-regular text-muted-gray text-[12px] leading-relaxed">
            Assim como a atividade física é hoje vista como uma ferramenta para a
            saúde do corpo, o exercício do pensamento também é ferramenta para elevar
            e manter a saúde do Cérebro. Criamos então o MentalPlus&#174;, o jogo
            digital <strong className="text-light-blue">
              que avalia e reabilita as funções cognitivas de pessoas com idade entre
              8 e 80 anos.
            </strong>
          </p>

          {/* 🔹 Versão DESKTOP/TABLET (com <br />) */}
          <p className="hidden sm:block w-[536px] lg:w-[670px] xl:w-[700px] font-regular text-muted-gray sm:text-[14px] lg:text-[18px] xl:text-[20px] leading-relaxed">
            Assim como a atividade física é hoje vista como uma ferramenta <br />
            para a saúde do corpo, o exercício do pensamento também é ferramenta <br />
            para elevar e manter a saúde do Cérebro. Criamos então o MentalPlus&#174;, <br />
            o jogo digital <strong className="text-light-blue">
              que avalia e reabilita as funções cognitivas <br />
              de pessoas com idade entre 8 e 80 anos.
            </strong>
          </p>
        </div>

        <div className="flex justify-center items-center mt-8 sm:mt-0">
          <img
            src="/images/DrBrainy_70769.webp"
            alt="Dr. Brainy"
            className="relative z-10 w-[140px] sm:w-[180px] lg:w-[320px] xl:w-[460px] -mt-4 sm:mt-60 lg:mt-70 xl:mt-80 ml-40 sm:ml-4 lg:ml-0 xl:ml-40"
          />
        </div>
      </section>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-y-6 sm:ml-20 sm:-mt-8 sm:gap-x-12 lg:ml-12 lg:-mt-16 lg:gap-x-14 xl:mr-6 xl:-mt-20 xl:gap-x-40 z-10 relative">
        <img src="/images/iphone_07.webp" alt="iphone" className='w-[150px] sm:w-[180px] lg:w-[290px] xl:w-[407px]' />
        <div className='mb-0 sm:mt-12 lg:mt-24 xl:mt-30'>
          <p className="text-light-blue font-black text-[12px] sm:text-[20px] lg:text-[32px] xl:text-[40px] leading-tight">
            MentalPlus&#174; um instrumento digital
          </p>
          <p className="text-fuscous-gray font-black text-[12px] sm:text-[20px] lg:text-[32px] xl:text-[36px] leading-tight mb-4">
            para profissionais da área da saúde
          </p>
          <p className="hidden sm:block w-[536px] lg:w-[670px] xl:w-[700px] font-regular text-muted-gray sm:text-[14px] lg:text-[18px] xl:text-[20px] leading-relaxed">
            É um jogo que permite que a comunidade da saúde e educação <br />
            possam identificar facilmente as alterações de memória, atenção, <br />
            linguagem e função executiva, em comparação com a bateria <br />
            de testes neuropsicológicos normalmente usada.
          </p>
          <p className="block sm:hidden w-[300px] font-regular text-muted-gray text-[12px] leading-relaxed">
            É um jogo que permite que a comunidade da saúde e educação
            possam identificar facilmente as alterações de memória, atenção,
            linguagem e função executiva, em comparação com a bateria
            de testes neuropsicológicos normalmente usada.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mt-56 mr-2 sm:mt-20 sm:mr-30 lg:mt-20 lg:mr-70 xl:mt-20 xl:mr-130">
        <div className="relative z-20">
          <p className="text-fuscous-gray font-black text-[14px] sm:text-[20px] lg:text-[24px] xl:text-[36px] leading-tight mb-4">
            O principal objetivo é a avaliação, <br />
            o estudo do diagnóstico e a reabilitação <br />
            da disfunção cognitiva em uma variedade <br />
            de condições psiquiátricas, identificando:
          </p>
          <p className="block sm:hidden w-[300px] font-regular text-muted-gray text-[12px] leading-relaxed mb-6">
            Memória, atenção, linguagem e função executiva,
            possibilitando um diagnóstico precoce e muito mais acessível
            de diversas patologias. Quanto mais precoce o diagnóstico
            dessas patologias, maior a chance de reabilitação destes pacientes.
          </p>
          <p className="hidden sm:block w-[536px] lg:w-[670px] xl:w-[700px] font-regular text-muted-gray sm:text-[14px] lg:text-[18px] xl:text-[20px] leading-relaxed sm:mb-6 lg:mb-8 xl:mb-10">
            Memória, atenção, linguagem e função executiva, <br />
            possibilitando um diagnóstico precoce e muito mais acessível <br />
            de diversas patologias. Quanto mais precoce o diagnóstico <br />
            dessas patologias, maior a chance de reabilitação destes pacientes.
          </p>
          <div className="flex flex-row -mb-5 gap-x-3">
            <p className="text-light-blue font-black text-[14px] sm:text-[20px] lg:text-[28px] xl:text-[36px] leading-tight mb-0 sm:-mb-1 lg:-mb-2 xl:-mb-2">
              MentalPlus&#174;
            </p>
            <p className="text-fuscous-gray font-black text-[14px] sm:text-[20px] lg:text-[28px] xl:text-[36px] leading-tight mb-4">
              é mais
            </p>
          </div>
          <p className="text-fuscous-gray font-black text-[14px] sm:text-[20px] lg:text-[28px] xl:text-[36px] leading-tight mb-4">
            que um simples jogo
          </p>
          <p className="block sm:hidden w-[300px] font-regular text-muted-gray text-[12px] leading-relaxed mb-10">
            Antes de tudo, além de jogo e ferramenta, ele é uma bateria
            de testes completa acessível ao profissional da saúde e Educação.
            Estamos ligados a muitos centros de universidades de todo o mundo e no
            Brasil. Teste e maximize a capacidade do seu cérebro com MentalPlus&#174;
          </p>
          <p className="hidden sm:block w-[536px] lg:w-[670px] xl:w-[700px] font-regular text-muted-gray sm:text-[12px] lg:text-[14px] xl:text-[14px] leading-relaxed">
            Antes de tudo, além de jogo e ferramenta, ele é uma bateria <br />
            de testes completa acessível ao profissional da saúde e Educação. <br />
            Estamos ligados a muitos centros de universidades de todo o mundo e no <br />
            Brasil. Teste e maximize a capacidade do seu cérebro com MentalPlus&#174;
          </p>

        </div>
      </div>
      <div className="relative -mt-140 ml-38 sm:-mt-70 sm:ml-120 lg:-mt-110 lg:ml-120 xl:-mt-150 xl:ml-190 z-10">
        <img
          src="/images/Group_1480.webp"
          alt="Tablet e Smartphone"
          className="w-[300px] sm:w-[520px] lg:w-[920px] xl:w-[1100px] lg:mt-10 lg:ml-12 xl:mt-10 xl:ml-16"
        />
      </div>

      <div className="relative flex flex-col justify-center items-center bg-[url('/images/Rectangle_737.webp')] bg-cover bg-[position:-680px] sm:bg-[position:-650px] lg:bg-[position:-560px] xl:bg-center bg-no-repeat w-full py-60 mt-118 sm:mt-12 lg:mt-0 xl:-mt-50">
        <div className='flex flex-col items-center text-left -ml-40 sm:-ml-126 lg:-ml-180 xl:-ml-240 -mt-100 sm:-mt-70 lg:-mt-72 xl:-mt-80'>
          <h2 className="font-black text-fuscous-gray text-[14px] sm:text-[14px] lg:text-[20px] xl:text-[20px]">
            Para saber mais clique
          </h2>
          <GeneralButton
            width="w-[110px] sm:w-[140px] lg:w-[200px] xl:w-[239.46px]"
            height="h-[45px] sm:h-[45px] lg:h-[65px] xl:h-[85px]"
            size="text-[20px] sm:text-[26px] lg:text-[30px] xl:text-[32px]"
            weight="font-black"
            bgColor="bg-light-blue"
            hoverBgColor="hover:bg-muted-gray"
            label="AQUI"
            onClick={() => window.location.href = '/saibamais'}
          />
        </div>
        <div className='flex flex-col items-center text-left mt-48 sm:mt-28 lg:mt-24 xl:mt-20 mb-4 sm:mb-4 lg:mb-8 xl:mb-10'>
          <h2 className="font-black text-center text-light-blue text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[32px] mb-4 sm:mb-4 lg:mb-8 xl:mb-8">
            VEJA NA ÍNTEGRA ALGUNS <br /> DE NOSSOS ARTIGOS CIENTÍFICOS
          </h2>
          <GeneralButton
            width="w-[110px] sm:w-[140px] lg:w-[200px] xl:w-[239.46px]"
            height="h-[45px] sm:h-[45px] lg:h-[65px] xl:h-[85px]"
            size="text-[20px] sm:text-[26px] lg:text-[30px] xl:text-[32px]"
            weight="font-black"
            bgColor="bg-light-blue"
            hoverBgColor="hover:bg-gray"
            label="LEIA"
            onClick={() => window.location.href = '/artigos'}
          />
        </div>
        <div className='flex flex-col justify-center items-center gap-x-4'>
          <h2 className='font-bold text-white xl:text-[18px] text-[14px] ml-8 sm:ml-4 lg:ml-1'>Validado pela:</h2>
          <a
            href="https://pesquisa.bvsalud.org/global-literature-on-novel-coronavirus-2019-ncov/resource/pt/ictrp-NCT04632719"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/logo_OMS-1024x256.webp"
              alt="OMS Logo"
              className="xl:w-[300px] lg:w-[250px] sm:w-[200px] w-[150px]"
            />
          </a>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center bg-charcoal-gray -mb-9 sm:-mb-2 lg:-mb-2 xl:-mb-8'>
        <h2 className="font-black text-center text-light-blue text-[22px] sm:text-[28px] lg:text-[28px] xl:text-[36px] mb-4 sm:mb-4 lg:mb-8 xl:mb-8">MARQUE UMA REUNIÃO</h2>
        <Calendly />
      </div>
    </DefaultSite>
  );
};

export default Home;
