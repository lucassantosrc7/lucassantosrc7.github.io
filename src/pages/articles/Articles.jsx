import React from 'react'
import DefaultSite from '../../Components/template/DefaultSite'
import CardDownload from '../../Components/organisms/CardDownload'
import Iframe from '../../Components/organisms/Iframe'

const Articles = () => {

    const convertToEmbed = (url) => {
        const id = url.split('/').pop()
        return `https://www.youtube.com/embed/${id}`
    }

    const videos = [
        { src: "https://youtu.be/QwtgYK-Zv4E", title: "Entrevista com Dra. Lívia Valentin na emissora CNN" },
        { src: "https://youtu.be/2l_D4CN_tI0", title: "Entrevista com Dra. Lívia Valentin na emissora TV CULTURA" },
        { src: "https://youtu.be/6-Q5Vi5M5U4", title: "LIVE | O Cérebro Social - Semana do Cérebro 2022" },
        { src: "https://youtu.be/iUQW0lVl4tY", title: "MENTALPLUS&#174; 2020 COVID-19" },
        { src: "https://youtu.be/rqVGS0GU4yQ", title: "MENTALPLUS&#174; TESTE E MAXIMIZE a capacidade do seu cérebro" },
    ]

    return (
        <DefaultSite>
            <div className='flex flex-row justify-center items-center mt-8 sm:mt-10 lg:mt-12 xl:mt-20'>
                <div className='relative flex flex-col justify-center items-center'>
                    <h1 className='font-black text-fuscous-gray text-[32px] sm:text-[56px] lg:text-[72px] xl:text-[96px]'>Artigos MentalPlus&#174;</h1>
                    <h2 className='font-black text-pink text-center text-[15px] sm:text-[26px] lg:text-[32px] xl:text-[45px]'>Apresentação dos Artigos Científicos <br /> sobre o MentalPlus&#174;</h2>
                </div>
                <div className='relative flex justify-center left-1 sm:left-18 lg:left-28 xl:left-80'>
                    <img src="/images/Group73.webp" alt="Caixa" className='w-[48px] mb-20 sm:mb-30 sm:w-[80px] lg:mb-40 lg:w-[100px] xl:mb-60 xl:w-[112px]' />
                </div>
            </div>
            <div className='flex flex-row justify-center items-center mt-8 sm:mt-4 lg:mt-6 xl:mt-8'>
                <div className='relative flex flex-col justify-center items-center gap-y-4'>

                    <p className='block sm:hidden font-regular text-muted-gray mx-8 text-[14px]'>O MentalPlus&#174; é uma ferramenta revolucionária na área de reabilitação cognitiva, desenvolvida com base em uma sólida fundamentação científica. Diversos estudos publicados em revistas renomadas do campo da neuropsicologia e reabilitação comprovam a eficácia e os benefícios do MentalPlus&#174; para pacientes com diferentes graus de comprometimento cognitivo.</p>
                    <p className='hidden sm:block font-regular text-muted-gray sm:text-[13px] lg:text-[18px] xl:text-[22px]'>O MentalPlus&#174; é uma ferramenta revolucionária na área de reabilitação cognitiva, desenvolvida com base em uma <br /> sólida fundamentação científica. Diversos estudos publicados em revistas renomadas do campo da neuropsicologia e <br /> reabilitação comprovam a eficácia e os benefícios do MentalPlus&#174; para pacientes com diferentes graus de <br /> comprometimento cognitivo.</p>

                    <p className='block sm:hidden font-regular text-muted-gray mx-8 text-[14px]'>A ampla gama de pesquisas científicas que embasam o MentalPlus&#174; abrange desde a análise dos impactos na memória e funções executivas até a melhoria na qualidade de vida dos pacientes e a promoção da neuroplasticidade. Esses estudos demonstram consistentemente que o uso regular do MentalPlus&#174; contribui para a recuperação cognitiva de forma eficiente e sustentável.</p>
                    <p className='hidden sm:block font-regular text-muted-gray sm:text-[13px] lg:text-[18px] xl:text-[22px]'>A ampla gama de pesquisas científicas que embasam o MentalPlus&#174; abrange desde a análise dos impactos na <br /> memória e funções executivas até a melhoria na qualidade de vida dos pacientes e a promoção da neuroplasticidade. <br /> Esses estudos demonstram consistentemente que o uso regular do MentalPlus&#174; contribui para a recuperação <br /> cognitiva de forma eficiente e sustentável.</p>

                    <p className='block sm:hidden font-regular text-muted-gray mx-8 text-[14px]'>Os resultados positivos obtidos através do MentalPlus&#174; são respaldados por rigorosos métodos científicos, garantindo que profissionais da saúde possam incorporar esta ferramenta em seus programas de tratamento com confiança. Com uma base científica robusta, o MentalPlus&#174; se destaca como uma solução confiável e inovadora para a reabilitação cognitiva, proporcionando aos pacientes um caminho mais eficaz para a recuperação.</p>
                    <p className='hidden sm:block font-regular text-muted-gray sm:text-[13px] lg:text-[18px] xl:text-[22px]'>Os resultados positivos obtidos através do MentalPlus&#174; são respaldados por rigorosos métodos científicos, <br /> garantindo que profissionais da saúde possam incorporar esta ferramenta em seus programas de tratamento com <br /> confiança. Com uma base científica robusta, o MentalPlus&#174; se destaca como uma solução confiável e inovadora para <br /> a reabilitação cognitiva, proporcionando aos pacientes um caminho mais eficaz para a recuperação.</p>

                    <h2 className='font-black text-pink text-center text-[15px] sm:text-[26px] lg:text-[32px] xl:text-[45px] mt-6'>MentalPlus&#174; na Mídia</h2>

                    <div className="relative flex justify-center items-center mt-8">
                        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 xl:gap-x-12">
                            {videos.map((video, index) => (
                                <Iframe key={index} src={convertToEmbed(video.src)} title={video.title} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className='font-black text-pink text-center text-[15px] sm:text-[26px] lg:text-[32px] xl:text-[45px] mt-6'>MentalPlus&#174; Artigos</h2>

                        <div className="relative grid grid-cols-1 sm:grid-cols-3 justify-center items-center gap-6 mt-10 ml-6 sm:ml-0 w-full px-4 z-10">
                            <CardDownload
                                text='Revista Científicada FHO'
                                file='https://saude.abril.com.br/mente-saudavel/estudo-brasileiro-reforca-que-a-covid-19-causa-problemas-cognitivos/'
                            />
                            <CardDownload
                                text='Pesquisa recuperados de Covid-19 mostra ...'
                                file='https://olhardigital.com.br/2021/02/10/noticias/pesquisa-com-recuperados-de-covid-19-mostra-disfuncoes-cognitivas/'
                            />
                            <CardDownload
                                text='Covid-19: oito em cada dez pacientes têm disfunções ...'
                                file='https://istoedinheiro.com.br/covid-19-8-em-cada-dez-pacientes-tem-disfuncoes-cognitivas-pos-infeccao'
                            />
                            <CardDownload
                                text='Confira a matéria sobre MENTALPLUS&#174; no artigo da USP'
                                file='https://jornal.usp.br/podcast/momento-tecnologia-55-aplicativo-ajuda-na-reabilitacao-cognitiva-pos-covid/'
                            />
                            <CardDownload
                                text='Assessment of a digital game as a neuropsychological ...'
                                file='/PDFs/Assessment-of-a-digital-game-as-a-neuropsychological.pdf'
                            />
                            <CardDownload
                                text='Can digital games be a way of improving the neuroplasticity ...'
                                file='/PDFs/Can-Digital-Games-Be-a-Way-of-Improving-the-Neuroplasticity.pdf'
                            />
                            <CardDownload
                                text='Comparison of digital games as a cognitive function ...'
                                file='/PDFs/Comparison-of-digital-games-as-a-cognitive-function.pdf'
                            />
                            <CardDownload
                                text='Digital game - A scale to evalute the perioperative ... '
                                file='/PDFs/DIGITAL-GAME-A-SCALE-TO-EVALUATE-THEPERIOPERATIVE.pdf'
                            />
                            <CardDownload
                                text='MentalPlus&#174; as a tool for early detection of dementias ... '
                                file='/PDFs/MentalPlus®-as-a-Tool-for-Early-Detection-of-Dementias.pdf'
                            />
                            <CardDownload
                                text='Jogo digital como ferramenta para avaliação de funções ...'
                                file='/PDFs/Jogo-digital-como-ferramenta-para-avaliacao-de-funcoes.pdf'
                            />
                            <CardDownload
                                text='Mentalplus&#174; digital game usefulness in cognitive ...'
                                file='/PDFs/Mentalplus-digital-game-usefulness-in-cognitive-dysfunction.pdf'
                            />
                            <CardDownload
                                text='MentalPlus&#174; digital game application for memory ...'
                                file='/PDFs/MentalPlus®-Digital-Game-Application-for-Memory-Assessment-in-the-Elderly.pdf'
                            />
                            <CardDownload
                                text='Mentalplus&#174; digital game is reliable to measure ...'
                                file='/PDFs/mentalplusR-digital-game-is-reliable-to-measure-cognitive.pdf'
                            />
                            <CardDownload
                                text='Can digital games be a way of improving the neuroplasticity ...'
                                file='/PDFs/OJMP_2017042815201805.pdf'
                            />
                            <CardDownload
                                text='Neurology brain injury 2019 Mentalplus&#174; digital game ...'
                                file='/PDFs/neurology-brain-injury-2019-mentalplus-digital-game.pdf'
                            />
                            <CardDownload
                                text='The MentalPlus&#174; digital game might be an accessible ...'
                                file='/PDFs/The_MentalPlus®_Digital_Game_M.pdf'
                            />
                            <CardDownload
                                text='Effects of the transcranial direct current stimulation ...'
                                file='/PDFs/JNSK-03-00078-tDCS-1.pdf'
                            />
                            <CardDownload
                                text='Neuropsychological assessment through MentalPlus&#174; ...'
                                file='/PDFs/Neuropsychological-assessment-through-MentalPlus.pdf'
                            />
                            <CardDownload
                                text='The MentalPlus&#174; digital game might be an accessible ... '
                                file='/PDFs/The-MentalPlus®-Digital-Game-Might-Be-an-Accessible.pdf'
                            />
                        </div>

                        <img src="/images/Group205.webp" alt="Bolinhas" className='mt-4 ml-50 w-[180px] sm:ml-130 sm:w-[220px] lg:ml-160 lg:w-[300px] xl:ml-200 xl:w-[382px]'
                        />
                    </div>

                </div>
            </div>
            <div className='relative flex justify-center -top-560 -left-52 sm:-top-200 sm:-left-104 lg:-top-200 lg:-left-138 xl:-top-200 xl:-left-230'>
                <img src="/images/Group205 (1).webp" alt="Plus" className='w-[30px] sm:w-[40px] lg:w-[60px] xl:w-[80px]' />
            </div>
        </DefaultSite>
    )
}

export default Articles
