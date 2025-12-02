import React from 'react'

const ScrollBar = () => {
    return (
        <>
            {/* Adiciona estilo customizado para scrollbar translúcido */}
            <style>{`
        .scrollbar-transparente::-webkit-scrollbar {
          width: 8px;
          background: transparent;
        }
        .scrollbar-transparente::-webkit-scrollbar-thumb {
          background: rgba(180, 180, 180, 0.25);
          border-radius: 8px;
          transition: background 0.2s;
        }
        .scrollbar-transparente:hover::-webkit-scrollbar-thumb {
          background: rgba(180, 180, 180, 0.45);
        }
        .scrollbar-transparente {
          scrollbar-width: thin;
          scrollbar-color: rgba(180,180,180,0.25) transparent;
        }
        @media (max-width: 640px) {
          .sm\\:gap-y-13 { gap: 2.5rem; }
        }
      `}</style>
        </>
    )
}

export default ScrollBar
