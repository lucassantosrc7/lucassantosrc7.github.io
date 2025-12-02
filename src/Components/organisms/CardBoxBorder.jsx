import React from 'react'

const CardBoxBorder = ({ 
  flexibility = 'flex-col', 
  width, 
  height, 
  bgColor = 'bg-white', 
  darkbgColor = 'dark:bg-dark-gray', 
  margin, 
  padding,
  bgcolorBorder = 'border-pink', 
  darkbgcolorBorder = 'dark:border-blue', 
  children }) => {
  return (
    <div className={
      `flex 
      ${flexibility} 
      justify-center 
      items-center 
      rounded-lg 
      ${bgColor} 
      ${darkbgColor} 
      ${width} 
      ${height} 
      ${margin} 
      ${padding} 
      border-b-[20px]
      ${bgcolorBorder} 
      ${darkbgcolorBorder}`
    }>
      {children}
    </div>
  )
}

export default CardBoxBorder
