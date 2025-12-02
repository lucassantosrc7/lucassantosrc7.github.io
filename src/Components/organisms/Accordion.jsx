import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const Accordion = ({ items }) => {
    const [openId, setOpenId] = useState(null)
    const toggle = (id) => setOpenId(prev => (prev === id ? null : id))

    // A função formatQuestion foi removida para manter a pontuação original.

    return (
        <div className="w-[360px] sm:w-[500px] lg:w-[500px] xl:w-[790px] mx-auto">   {/* largura fixa + centralizado */}
            {items.map(({ id, question, answer }) => {
                const isOpen = openId === id

                return (
                    <motion.div
                        key={id}
                        layout="position"   // impede deslocamentos ao abrir a resposta
                        className="-py-2"
                    >
                        <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={`faq-panel-${id}`}
                            onClick={() => toggle(id)}
                            className="w-full flex items-center gap-3 p-4"
                        >
                            {/* Ícone à esquerda */}
                            <motion.span
                                initial={false}
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 24
                                }}
                                className="flex-shrink-0"
                            >
                                {isOpen ? (
                                    <Minus size={26} className="text-pink cursor-pointer" />
                                ) : (
                                    <Plus size={26} className="text-blue cursor-pointer" />
                                )}
                            </motion.span>

                            {/* Pergunta AGORA COM ponto final / interrogação */}
                            <span
                                className={`text-left font-black text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[25px] leading-snug ${
                                    isOpen ? "text-pink" : "text-blue"
                                }`}
                                // Renderiza a pergunta diretamente (sem dangerouslySetInnerHTML, pois não há HTML nela, e sem a função de formatação)
                                // Usamos textContent aqui por ser a forma padrão e segura de renderizar texto.
                            >
                                {question}
                            </span>
                        </button>

                        {/* Resposta */}
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.section
                                    id={`faq-panel-${id}`}
                                    layout="position"     // mantém posição estável
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.35 }}
                                    className="px-4 pb-4"
                                >
                                    <div
                                        className="pt-2 text-regular text-fuscous-gray text-[14px] sm:text-[16px] lg:text-[16px] xl:text-[18px]"
                                        // Renderiza a resposta com a conversão de \n\n para <p> para blocos de texto
                                        dangerouslySetInnerHTML={{
                                            __html: answer.replace(/\n\n/g, '<p class="my-3"></p>')
                                        }}
                                    />
                                </motion.section>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )
            })}
        </div>
    )
}

export default Accordion