import React, { useState } from "react"
import DefaultSite from "../../Components/template/DefaultSite.jsx"
import InputsForm from "../../Components/molecule/InputsForm.jsx"
import GeneralButton from "../../Components/atoms/GeneralButton"
import CardBox from "../../Components/organisms/CardBox"
import { mentalPlusEndpoint } from "../../mentalPlusEndpoint.js"

const Contact = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [motivo, setMotivo] = useState("")
    const [mensagem, setMensagem] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Validação simples
        if (!nome || !email || !telefone || !motivo || !mensagem) {
            alert("Por favor, preencha todos os campos antes de enviar.")
            return
        }

        try {
            const response = await fetch(`${mentalPlusEndpoint}/email/support`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: nome,
                    email: email,
                    phone: telefone,
                    reasons: motivo,
                    message: mensagem,
                }),
            })

            if (!response.ok) {
                throw new Error("Erro ao enviar formulário")
            }

            alert("Mensagem enviada com sucesso!")
            handleClear()

        } catch (error) {
            console.error(error)
            alert("Erro ao enviar. Tente novamente mais tarde.")
        }
    }

    const handleClear = () => {
        setNome("")
        setEmail("")
        setTelefone("")
        setMotivo("")
        setMensagem("")
    }

    return (
        <DefaultSite>
            <div className="flex flex-row justify-center items-center bg-[url('/images/Rectangle736(1).webp')] bg-cover bg-[center_100%] bg-no-repeat w-full relative">
                <div className="flex flex-col items-start text-left">
                    <h1 className="font-black text-[30px] sm:text-[54px] lg:text-[70px] xl:text-[80px] text-fuscous-gray mt-8 sm:mt-12 lg:mt-20 xl:mt-30">
                        Contato
                    </h1>

                    <CardBox
                        width="w-[310px] sm:w-[540px] lg:w-[900px] xl:w-[929px]"
                        height="h-auto"
                        margin="mb-12 xl:mb-0"
                        padding="pt-22 pb-12"
                        bgColor="bg-white"
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col justify-center items-center gap-6"
                        >
                            <InputsForm
                                title="Nome Completo"
                                type="text"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                width="w-[290px] sm:w-[440px] lg:w-[820px]"
                                height="lg:h-[36px]"
                            />

                            <InputsForm
                                title="E-mail"
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                width="w-[290px] sm:w-[440px] lg:w-[820px]"
                                height="h-[36px]"
                            />

                            <InputsForm
                                title="Telefone"
                                type="telefone"
                                id="telefone"
                                placeholder="(99) 999999999"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                width="w-[290px] sm:w-[440px] lg:w-[820px]"
                                height="h-[36px]"
                            />

                            <InputsForm
                                title="Motivo"
                                type="radio-group"
                                id="motivo"
                                value={motivo}
                                onChange={(e) => setMotivo(e.target.value)}
                                width="w-[290px] sm:w-[440px] lg:w-[820px]"
                                options={[
                                    "Parabenização",
                                    "Orçamento",
                                    "Dúvida",
                                    "Sugestão",
                                    "Outros",
                                ]}
                            />

                            <InputsForm
                                title="Mensagem"
                                type="textarea"
                                id="mensagem"
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                width="w-[290px] sm:w-[440px] lg:w-[820px]"
                            />

                            {/* ---- Botões à ESQUERDA ---- */}
                            <div className="flex justify-start gap-x-4 w-[820px] mt-4 ml-144 sm:ml-120 lg:ml-0">
                                <GeneralButton
                                    width="w-[110px] sm:w-[166px]"
                                    height="h-[46px]"
                                    label="Enviar"
                                    type="submit"
                                    bgColor="bg-blue"
                                    hoverBgColor="hover:bg-muted-gray"
                                />

                                <GeneralButton
                                    width="w-[110px] sm:w-[166px]"
                                    height="h-[46px]"
                                    label="Apagar"
                                    hoverBgColor="hover:bg-muted-gray"
                                    type="button"
                                    onClick={handleClear}
                                />
                            </div>
                        </form>
                    </CardBox>
                </div>
            </div>

            <div className="relative flex justify-around items-right -mt-180 ml-88 mb-150 sm:-mt-180 sm:ml-160 sm:mb-120 lg:-mt-180 lg:ml-240 lg:mb-110 xl:-mt-230 xl:ml-380 xl:mb-14">
                <img
                    src="/images/Brainy1504.webp"
                    alt="Brainy"
                    className="w-[50px] sm:w-[120px] lg:w-[140px] xl:w-[400px]"
                />
            </div>
        </DefaultSite>
    )
}

export default Contact
