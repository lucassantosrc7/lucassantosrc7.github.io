import React from 'react'

const CardBox = ({ flexibility = 'flex-col', width, height, bgColor, margin, padding, children }) => {
  return (
    <div className={
      `flex 
      ${flexibility} 
      justify-center 
      items-center 
      rounded-lg 
      ${bgColor}
      ${width} 
      ${height} 
      ${margin} 
      ${padding}`
    }>
      {children}
    </div>
  )
}

export default CardBox
