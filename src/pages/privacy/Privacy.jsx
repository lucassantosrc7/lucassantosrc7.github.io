import React from 'react'
import DefaultSite from "../../Components/template/DefaultSite.jsx"

const Privacy = () => {
    return (
        <DefaultSite>
            <div className='flex flex-col justify-center items-center mt-10 sm:mt-12 lg:mt-14 xl:mt-20 mb-10'>
                <h1 className='flex justify-center items-left text-blue font-black text-[18px] sm:text-[28px] lg:text-[32px] xl:text-[48px] mb-8'>
                    Política de Privacidade
                </h1>

                <div className='flex flex-col justify-center items-left text-fuscous-gray text-[14px] sm:text-[18px] lg:text-[22px] xl:text-[26px] mx-14 sm:mx-30 lg:mx-50 xl:mx-80 gap-y-10'>

                    <p>
                        Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos as informações pessoais que você fornece ao utilizar o aplicativo MentalPlus&#174;. 
                        Valorizamos sua privacidade e estamos comprometidos em proteger suas informações pessoais. Leia atentamente esta política antes de utilizar nosso aplicativo 
                        ou fornecer suas informações pessoais.
                    </p>

                    {/* LISTA PRINCIPAL AGORA É <ol> */}
                    <ol className='flex flex-col justify-center items-left gap-y-6 ml-4 sm:ml-6 lg:ml-8 xl:ml-12 list-decimal'>

                        {/* 1 */}
                        <li>
                            <p className='font-bold'>Coleta de informações pessoais</p>
                            <p>Podemos coletar as seguintes informações pessoais quando você utiliza o aplicativo MentalPlus&#174;:</p>

                            <ul className='list-disc flex flex-col gap-y-1 ml-6 sm:ml-8 lg:ml-10 xl:ml-12'>
                                <li>Nome completo</li>
                                <li>Endereço de e-mail</li>
                                <li>Data de nascimento</li>
                                <li>Informações de contato (como número de telefone)</li>
                                <li>Informações demográficas (como localização geográfica)</li>
                            </ul>
                        </li>

                        {/* 2 */}
                        <li>
                            <p className='font-bold'>Uso das informações pessoais</p>
                            <p>Utilizamos suas informações pessoais para os seguintes propósitos relacionados ao aplicativo MentalPlus&#174;:</p>

                            <ul className='list-disc flex flex-col gap-y-1 ml-6 sm:ml-8 lg:ml-10 xl:ml-12'>
                                <li>Fornecer os serviços e recursos do aplicativo</li>
                                <li>Personalizar sua experiência no aplicativo</li>
                                <li>Enviar notificações e comunicações relacionadas aos recursos e atualizações do aplicativo</li>
                                <li>Analisar dados de uso para melhorar o aplicativo e oferecer conteúdo relevante</li>
                                <li>Garantir a segurança e a integridade do aplicativo e dos usuários</li>
                            </ul>
                        </li>

                        {/* 3 */}
                        <li>
                            <p className='font-bold'>Compartilhamento de informações pessoais</p>
                            <p>Não compartilhamos suas informações pessoais com terceiros, exceto nas seguintes circunstâncias:</p>

                            <ul className='list-disc flex flex-col gap-y-1 ml-6 sm:ml-8 lg:ml-10 xl:ml-12'>
                                <li>Consentimento explícito seu</li>
                                <li>Quando necessário para fornecer os serviços solicitados</li>
                                <li>Em cumprimento às leis ou processos legais</li>
                            </ul>
                        </li>

                        {/* 4 */}
                        <li>
                            <p className='font-bold'>Segurança das informações pessoais</p>
                            <p>
                                Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, uso indevido, 
                                alteração, divulgação ou destruição. No entanto, não podemos garantir segurança absoluta devido à natureza das transmissões pela Internet.
                            </p>
                        </li>

                        {/* 5 */}
                        <li>
                            <p className='font-bold'>Alterações nesta Política de Privacidade</p>
                            <p>
                                Reservamo-nos o direito de atualizar ou modificar esta Política de Privacidade do MentalPlus&#174; a qualquer momento. 
                                Recomendamos revisar periodicamente esta política.
                            </p>
                        </li>

                        {/* 6 */}
                        <li>
                            <p className='font-bold'>Contato</p>
                            <p>
                                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o uso das suas informações pessoais, 
                                entre em contato por meio das informações disponibilizadas no aplicativo.
                            </p>
                        </li>

                    </ol>

                    <p>Esta Política de Privacidade do MentalPlus&#174; foi atualizada pela última vez em 07/07/2023</p>
                </div>
            </div>
        </DefaultSite>
    )
}

export default Privacy
