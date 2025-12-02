import React, { useState, useEffect } from "react";

const PopUp_Natal = ({ onClose }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const videos = [
    "/images/Tematico/GIFT01.webm",
    "/images/Tematico/GIFT02.webm",
    "/images/Tematico/GIFT03.webm",
  ];

  const handleGiftClick = () => {
    const random = Math.floor(Math.random() * videos.length);
    setSelectedVideo(videos[random]);
  };

  useEffect(() => {
    if (selectedVideo) {
      const videoElement = document.getElementById("popup-video");
      if (!videoElement) return;

      const handleEnded = () => {
        setTimeout(() => setShowForm(true), 200);
      };

      videoElement.addEventListener("ended", handleEnded);
      return () => videoElement.removeEventListener("ended", handleEnded);
    }
  }, [selectedVideo]);

  const getPremio = () => {
    if (selectedVideo === videos[0]) return "10% de desconto";
    if (selectedVideo === videos[1]) return "15% de desconto";
    return "Avaliação";
  };

  return (
    <div className="fixed inset-1 lg:inset-0 flex items-center justify-center backdrop-blur-md bg-white/10 z-70">
      <div
        className="relative rounded-lg bg-white w-[300px] h-[240px] sm:w-[600px] sm:h-[380px] lg:w-[800px] lg:h-[480px] flex flex-col items-center justify-between overflow-hidden"
        style={{
          backgroundImage: "url('/images/Tematico/BG_PopUp.webp')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-1 right-3 text-black text-[12px] sm:text-[16px] lg:text-[18px] font-black hover:opacity-70 z-40 cursor-pointer"
        >
          X
        </button>

        {!showForm && selectedVideo && (
          <div className="absolute inset-0 backdrop-blur-lg bg-white/1 z-20"></div>
        )}

        {selectedVideo && !showForm && (
          <video
            id="popup-video"
            src={selectedVideo}
            autoPlay
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[350px] lg:w-[460px] h-auto rounded-lg z-30 pointer-events-none"
          />
        )}

        {!showForm && (
          <img
            src="/images/Tematico/Enfeite_PopUp.webp"
            alt="Enfeite"
            className="flex justify-center items-center w-[260px] sm:w-[500px] lg:w-[600px] object-contain mt-2 mb-2 ml-4 lg:mt-4 lg:mb-4 lg:ml-10 z-10"
          />
        )}

        {!selectedVideo && !showForm && (
          <div className="flex gap-6 mt-4 z-10">
            {[1, 2, 3].map((item) => (
              <button
                key={item}
                onClick={handleGiftClick}
                className="focus:outline-none hover:scale-105 transition-transform"
              >
                <img
                  src="/images/Tematico/presente.webp"
                  alt="Presente"
                  className="w-14 h-14 sm:w-30 sm:h-30 lg:w-40 lg:h-40 object-contain cursor-pointer"
                />
              </button>
            ))}
          </div>
        )}

        {showForm && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-xl z-40 p-6 rounded-lg animate-fadeIn">
            <h2 className="text-xl font-bold mb-1">Cadastre seus dados</h2>
            <p className="text-green-700 font-bold text-lg mb-4">
              🎁 Você ganhou {getPremio()}!
            </p>

            <form
              className="flex flex-col gap-3 w-3/4 max-w-sm"
              onSubmit={(e) => {
                e.preventDefault();

                const nome = e.target.nome.value;
                const cpf = e.target.cpf.value;

                // ---- Validação de CPF ----
                const validarCPF = (cpf) => {
                  if (!cpf || cpf.length !== 11 || /^([0-9])\1+$/.test(cpf))
                    return false;

                  let soma = 0;
                  for (let i = 0; i < 9; i++)
                    soma += parseInt(cpf.charAt(i)) * (10 - i);
                  let resto = (soma * 10) % 11;
                  if (resto === 10 || resto === 11) resto = 0;
                  if (resto !== parseInt(cpf.charAt(9))) return false;

                  soma = 0;
                  for (let i = 0; i < 10; i++)
                    soma += parseInt(cpf.charAt(i)) * (11 - i);
                  resto = (soma * 10) % 11;
                  if (resto === 10 || resto === 11) resto = 0;

                  return resto === parseInt(cpf.charAt(10));
                };

                if (!validarCPF(cpf)) {
                  alert("CPF inválido!");
                  return;
                }

                // ---- Verificar CPF já utilizado ----
                const usados = JSON.parse(
                  localStorage.getItem("cpfs_usados") || "[]"
                );

                if (usados.includes(cpf)) {
                  alert("Este CPF já foi utilizado nesta promoção.");
                  return;
                }

                usados.push(cpf);
                localStorage.setItem("cpfs_usados", JSON.stringify(usados));

                const data = {
                  nome,
                  cpf,
                  premio: getPremio(),
                  video: selectedVideo,
                };

                console.log("Enviado", data);

                // Envio para WhatsApp
                const whatsappNumber = "5511963724579";
                const whatsappMessage =
                  `*Novo Cadastro - Promoção de Natal*\n` +
                  `Nome: ${data.nome}\n` +
                  `CPF: ${data.cpf}\n` +
                  `Prêmio: ${data.premio}`;

                const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

                window.open(whatsappURL, "_blank");

              }}
            >
              <input
                type="text"
                name="nome"
                placeholder="Nome completo"
                className="border p-2 rounded-md"
              />
              <input
                type="text"
                name="cpf"
                placeholder="CPF"
                className="border p-2 rounded-md"
              />

              <button
                type="submit"
                className="bg-blue text-white py-2 rounded-md hover:bg-fuscous-gray cursor-pointer transition"
              >
                Enviar
              </button>
            </form>
          </div>
        )}

        {!showForm && (
          <p className="text-black text-[12px] lg:text-xs text-center z-10 mb-4 sm:mb-2">
            Promoção não cumulativa, dúvidas entre em{" "}
            <a
              href="/contato"
              className="text-blue hover:underline font-medium"
            >
              contato
            </a>.
          </p>
        )}
      </div>
    </div>
  );
};

export default PopUp_Natal;
