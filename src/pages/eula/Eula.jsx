import React from 'react'
import DefaultSite from "../../Components/template/DefaultSite.jsx"

const Eula = () => {
    return (
        <DefaultSite>
            <div className='flex flex-col justify-center items-center mt-10 sm:mt-12 lg:mt-14 xl:mt-20 mb-10'>
                <h1 className='flex justify-center items-left text-blue font-black text-[18px] sm:text-[28px] lg:text-[32px] xl:text-[36px] mb-8'>
                    Acordo de licença de usuário final (EULA)
                </h1>

                <div className='flex flex-col justify-center items-left text-fuscous-gray text-[14px] sm:text-[18px] lg:text-[22px] xl:text-[26px] mx-14 sm:mx-30 lg:mx-50 xl:mx-80 gap-y-10'>

                    <p>
                        Este Contrato de Licença do Usuário Final é um acordo legal entre você e referente ao uso do aplicativo MentalPlus&#174; fornecido pela Empresa. 
                        Ao instalar ou utilizar o Aplicativo, o Usuário concorda em cumprir os termos e condições deste Contrato.
                    </p>

                    {/* LISTA PRINCIPAL */}
                    <ul className='flex flex-col justify-center items-left gap-y-8 ml-4 sm:ml-6 lg:ml-8 xl:ml-12'>

                        <li>
                            <strong>1. Concessão de Licença</strong>
                            <p>
                                De acordo com os termos e condições deste Contrato, a Empresa concede ao Usuário uma licença limitada, não exclusiva e intransferível 
                                para utilizar o Aplicativo MentalPlus&#174; para fins profissionais. O Usuário não pode distribuir, modificar, engenharia reversa ou sublicenciar o Software.
                            </p>
                        </li>

                        <li>
                            <strong>2. Propriedade e Propriedade Intelectual</strong>
                            <p>
                                O Usuário reconhece que o Software MentalPlus&#174; e qualquer documentação associada são propriedade exclusiva da Empresa e são protegidos 
                                pelas leis de propriedade intelectual. O Usuário concorda em não remover ou alterar quaisquer avisos de direitos autorais, marcas comerciais 
                                ou outros avisos de propriedade presentes no Software.
                            </p>
                        </li>

                        <li>
                            <strong>3. Limitações e Restrições</strong>
                            <p>
                                O Usuário concorda em não utilizar o Aplicativo MentalPlus&#174; para qualquer finalidade ilegal ou não autorizada. O Usuário não deve tentar obter 
                                acesso não autorizado ao Aplicativo ou interferir em seu funcionamento adequado. O Usuário reconhece que a Empresa pode atualizar ou modificar 
                                o Aplicativo periodicamente e pode exigir que o Usuário instale tais atualizações ou modificações.
                            </p>
                        </li>

                        <li>
                            <strong>4. Requisito de Certificação do Curso</strong>
                            <p>
                                O Usuário declara e concorda que para utilizar o Aplicativo MentalPlus&#174;, é necessário possuir um certificado válido do curso fornecido pela Empresa. 
                                O Usuário deve apresentar o certificado como comprovação de sua qualificação para utilizar a ferramenta.
                            </p>
                        </li>

                        <li>
                            <strong>5. Isenção de Garantia</strong>
                            <p>
                                O Aplicativo MentalPlus&#174; é fornecido “como está”, sem quaisquer garantias ou representações, sejam expressas ou implícitas. A Empresa se isenta 
                                de todas as garantias, incluindo, mas não se limitando a, garantias implícitas de comercialização, adequação a uma finalidade específica e não violação. 
                                O Usuário assume todos os riscos e responsabilidades associados ao uso do Aplicativo.
                            </p>

                            <p>
                                O Usuário reconhece e concorda que o Aplicativo MentalPlus&#174; é uma ferramenta de suporte e não substitui a avaliação e o julgamento de um profissional 
                                de saúde e ou educação qualificado. O profissional que utiliza o Aplicativo é responsável pela avaliação adequada dos pacientes e pela aplicação de 
                                qualquer tratamento ou intervenção com base em seu próprio julgamento.
                            </p>

                            <p>
                                A Empresa não se responsabiliza pelo uso inadequado do Aplicativo por parte do profissional de saúde, nem pelos resultados decorrentes desse uso. 
                                É responsabilidade exclusiva do profissional garantir a segurança e eficácia do uso do Aplicativo, bem como cumprir leis e diretrizes aplicáveis.
                            </p>
                        </li>

                        <li>
                            <strong>6. Limitação de Responsabilidade</strong>
                            <p>
                                Em nenhuma circunstância a Empresa será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais decorrentes 
                                do uso do Aplicativo MentalPlus&#174;, mesmo que avisada da possibilidade de tais danos. A responsabilidade total da Empresa não excederá o valor pago 
                                pelo Usuário pelo Aplicativo.
                            </p>
                        </li>

                        <li>
                            <strong>7. Rescisão</strong>
                            <p>
                                Este Contrato é válido até ser rescindido. A Empresa pode rescindir este Contrato a qualquer momento, caso o Usuário deixe de cumprir seus termos 
                                e condições. Após a rescisão, o Usuário deve interromper todo o uso do Aplicativo e destruir todas as cópias em sua posse.
                            </p>
                            <p>
                                Lei Aplicável: Este Contrato será regido e interpretado de acordo com as leis de [Jurisdição]. Quaisquer disputas decorrentes ou relacionadas a 
                                este Contrato estarão sujeitas à jurisdição exclusiva dos tribunais de [Jurisdição].
                            </p>
                            <p>
                                Ao instalar ou utilizar o Aplicativo MentalPlus&#174;, o Usuário reconhece ter lido e entendido este Contrato e concorda em cumprir seus termos.
                            </p>
                        </li>

                    </ul>

                    <p>Este EULA foi atualizado em: <br /> 07/07/2023</p>

                </div>
            </div>
        </DefaultSite>
    )
}

export default Eula
