import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import PopUp from '../organisms/PopUp'

const DefaultScreen = ({ body }) => {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
  const [pendingHref, setPendingHref] = useState(null)

  useEffect(() => {
    const handler = (e) => {
      setPendingHref(e?.detail?.href || '/')
      setShowLogoutConfirm(true)
    }
    window.addEventListener('open-logout-popup', handler)
    return () => window.removeEventListener('open-logout-popup', handler)
  }, [])

  return (
    <main>
      <Topbar />
      <Sidebar />
      <div className='column xl:flex justify-center items-center min-h-screen w-full bg-light-gray dark:bg-gray pt-40 gap-x-12 pl-22 lg:pl-20 xl:pl-50 lg:pt-30'>
        {body}
      </div>

      <PopUp
        visible={showLogoutConfirm}
        title={'Vai sair?'}
        message={'Tem certeza que deseja sair?'}
        onCancel={() => setShowLogoutConfirm(false)}
        onConfirm={() => {
          setShowLogoutConfirm(false)
          window.location.href = pendingHref || '/'
        }}
      />
    </main>
  )
}

export default DefaultScreen
