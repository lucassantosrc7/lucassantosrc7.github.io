import React, { useState } from 'react'
import DefaultScreen from '../../Components/template/DefaultScreen'
import CardBoxBorder from '../../Components/organisms/CardBoxBorder'

const Agenda = () => {
  const [month, setMonth] = useState(9)
  const [year, setYear] = useState(2025)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const businessHours = Array.from({ length: 11 }, (_, i) => `${String(i + 8).padStart(2, '0')}:00`)

  const getCalendarDays = (month, year) => {
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const days = []

    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null)
    }

    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(year, month, d))
    }

    return days
  }

  const calendarDays = getCalendarDays(month, year)

  const formatDate = (date) =>
    date.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })

  return (
    <DefaultScreen
      body={
        <div className='flex flex-col justify-center items-center mt-24 xl:mt-0'>
          <CardBoxBorder
            width='w-[280px] sm:w-[400px] lg:w-[650px] xl:w-[1000px]'
            height='h-auto'
            padding='p-8 gap-x-8'
            margin='mb-12 lg:mb-10 xl:mb-0'
            children={
              <div className='flex flex-col xl:flex-row gap-8 w-full'>
                {/* Coluna do calendário */}
                <div className='flex flex-col gap-4 w-full xl:w-2/3'>
                  <h1 className='text-pink dark:text-blue text-2xl font-bold text-center'>Agenda</h1>

                  {/* Seleção de mês e ano */}
                  <div className='flex justify-center gap-4'>
                    <select
                      value={month}
                      onChange={(e) => {
                        setMonth(Number(e.target.value))
                        setSelectedDate(null)
                        setSelectedTime(null)
                      }}
                      className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-2 rounded-md'
                    >
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i} value={i}>
                          {new Date(2025, i).toLocaleString('pt-BR', { month: 'long' })}
                        </option>
                      ))}
                    </select>
                    <select
                      value={year}
                      onChange={(e) => {
                        setYear(Number(e.target.value))
                        setSelectedDate(null)
                        setSelectedTime(null)
                      }}
                      className='bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-2 rounded-md'
                    >
                      {Array.from({ length: 8 }, (_, i) => 2023 + i).map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>

                  {/* Dias da semana */}
                  <div className='grid grid-cols-7 gap-1 sm:gap-2 xl:gap-4 text-center text-gray dark:text-white font-semibold'>
                    {['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'].map((day) => (
                      <div key={day}>{day}</div>
                    ))}
                  </div>

                  {/* Dias do mês */}
                  <div className='grid grid-cols-7 gap-1 sm:gap-2 xl:gap-4'>
                    {calendarDays.map((day, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (day) {
                            setSelectedDate(day)
                            setSelectedTime(null)
                          }
                        }}
                        className={`h-8 w-8 sm:h-10 sm:w-10 xl:h-12 xl:w-12 rounded-full flex items-center justify-center text-sm font-medium transition
                          ${day
                            ? selectedDate?.toDateString() === day.toDateString()
                              ? 'bg-blue text-white dark:bg-pink dark:text-white hover:bg-blue dark:hover:bg-pink cursor-pointer'
                              : 'bg-pink text-white hover:bg-blue dark:bg-blue dark:text-white dark:hover:bg-pink cursor-pointer'
                            : 'bg-transparent cursor-default'}`}
                      >
                        {day ? day.getDate() : ''}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Coluna de horários */}
                {selectedDate && (
                  <div className='flex flex-col gap-4 w-full xl:w-1/3'>
                    <h2 className='text-pink dark:text-blue text-xl font-semibold'>
                      Horários para {formatDate(selectedDate)}
                    </h2>
                    <div className='flex flex-col gap-3'>
                      {businessHours.map((time) => (
                        <div key={time} className='flex items-center gap-2'>
                          <button
                            onClick={() => setSelectedTime(time)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition 
                              ${selectedTime === time
                                ? 'bg-blue text-white dark:bg-pink dark:text-white hover:bg-blue dark:hover:bg-pink cursor-pointer'
                                : 'bg-pink text-white hover:bg-blue dark:bg-blue dark:text-white dark:hover:bg-pink cursor-pointer'}`}
                          >
                            {time}
                          </button>
                          {selectedTime === time && (
                            <button className='px-3 py-2 bg-pink text-white rounded-md font-semibold hover:bg-blue dark:bg-blue dark:hover:bg-pink cursor-pointer mb-0'>
                              Avançar
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            }
          />
        </div>
      }
    />
  )
}

export default Agenda