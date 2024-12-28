import React, { useState } from 'react'

const App = () => {

  const [bgColor, setBgcolor] = useState('#686868')

  const handleClick = () => {
    const random = '#' + Math.random().toString(16).slice(2,8)
    setBgcolor(random)
  }

  return (
    <div className='bg-gray-100 w-screen h-screen flex flex-col items-center justify-center'>
      <button 
      onClick={handleClick}
      style={{background: `${bgColor}`}} 
      className='p-4 text-white text-3xl rounded-md shadow-md'
      >Change Color</button>
    </div>
  )
}

export default App