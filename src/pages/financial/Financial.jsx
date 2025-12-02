import React from 'react'
import DefaultScreen from '../../Components/template/DefaultScreen'
import CardBoxBorder from '../../Components/organisms/CardBoxBorder'

const Financial = () => {
  return (
    <DefaultScreen
      body={
        <>
          <div className='flex flex-col justify-center items-center gap-y-6 xl:gap-y-13 mt-24 xl:mt-0'>
            <CardBoxBorder
            width='w-[320px] xl:w-[894px]'
            height='h-[700px] xl:h-[535px]'
            padding='p-8 gap-x-8'
              children={
                <>
                  <div className='flex flex-col justify-center items-center w-full'>
                    <h1 className='text-pink dark:text-blue text-2xl font-bold'>Financeiro</h1>
                  </div>
                </>
              }
            />
          </div>
        </>
      }
    />
  )
}

export default Financial
