import React from 'react'

const Header = () => {
  return (
    <>
      <header className='flex bg-transparent text-slate-300 font-bold max-sm:text-white items-center justify-between  font-[helvetica] sticky top-0 z-30'>
        <div className='flex flex-row justify-center items-center hover:text-white hover:cursor-pointer' >
          <div className="p-4 rounded-lg text-center relative">
            <div className="w-10 h-10 rounded-full inline-flex items-center justify-center text-xl font-bold border-[2px]">
              幸
            </div>
          </div>
          <h1 className='font-bold'>Fitness-AI</h1>
        </div>
        <div className='justify-center max-sm:hidden'>
          <ul className='flex px-10 space-x-10'>
            <li className='hover:cursor-pointer hover:text-white'>HOME</li>
            <li className='hover:cursor-pointer hover:text-white'>ABOUT</li>
            <li className='hover:cursor-pointer hover:text-white'>FITNESS</li>
            <li className='hover:cursor-pointer hover:text-white'>CARE</li>
            <li className='hover:cursor-pointer hover:text-white'>STORE</li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header