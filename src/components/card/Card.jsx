import React from 'react'
import { useAppContext } from '../../context/AppContext'

const Card = ({heading, highlight, content, buttontext}) => {
  const { setAppState } = useAppContext()

  const handleClick = (e)=>{
    if(buttontext === 'Generate now'){
      setAppState(prev => ({...prev, step: 'form'}))
    }
    else if(buttontext === "See"){
      setAppState(prev => ({...prev, step: 'browseAll'}))
    }
    else if(buttontext === "All"){
      setAppState(prev => ({...prev, step: 'all'}))
    }
  }

  return (
    <>
      <div className='flex hover:scale-[1.02] m-2 flex-col border-black border-[1px] rounded-xl p-8 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <h2 className='sm:text-xl font-bold text-black'>{heading}</h2>
        <h1 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-600'>{highlight}</h1>  
        <p>{content} </p>
        <p className='text-xs p-1  cursor-pointer hover:text-black' onClick={(e)=>handleClick(e)}>{buttontext} &rarr;</p>
      </div>
    </>
  )
}

export default Card