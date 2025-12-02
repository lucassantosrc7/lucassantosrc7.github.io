import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {

  const phoneNumber = '5511963724579'; 
  const message = 'Olá, gostaria de mais informações!'; // Mensagem pré-definida opcional
  
  const encodedMessage = encodeURIComponent(message);
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 sm:bottom-28 lg:bottom-28 xl:bottom-18 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="Abrir conversa no WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
      
    </a>
  );
};

export default WhatsAppButton;