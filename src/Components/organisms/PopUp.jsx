import React, { useEffect } from 'react'
import GeneralButton from "../atoms/GeneralButton"

const PopUp = ({
  visible,
  title,
  message,
  onConfirm,
  onCancel,
  confirmLabel = 'Sim',
  cancelLabel = 'Não',
}) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && visible) onCancel && onCancel()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [visible, onCancel])

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* overlay com blur */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={onCancel} />

      <div className="bg-white dark:bg-dark-gray rounded-lg p-6 z-60 w-[320px] mx-4">
        <h2
          id="popup-title"
          className="text-center text-lg font-semibold mb-4 text-gray dark:text-white"
        >
          {title}
        </h2>

        <p className="text-center mb-6 text-gray dark:text-white">{message}</p>

        <div className="flex justify-center gap-3">
          <GeneralButton
            label={cancelLabel}
            onClick={onCancel}
            bgColor="bg-gray"
            darkBgColor="dark:bg-gray"
            hoverBgColor="hover:bg-dark-gray"
            hoverDarkBgColor="hover:dark:bg-light-gray"
            size="text-[16px]"
            padding="px-4 py-2"
            width="w-[100px]"
          />

          {/* Botão SIM que fecha aba */}
          <GeneralButton
            label={confirmLabel}
            onClick={() => {
              onConfirm && onConfirm()
              window.close()          // tenta fechar a aba
            }}
            size="text-[16px]"
            padding="px-4 py-2"
            width="w-[100px]"
          />
        </div>
      </div>
    </div>
  )
}

export default PopUp
