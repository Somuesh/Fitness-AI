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
      <div className='flex hover:scale-[1.02] m-2 flex-col  border-[1px] rounded-xl p-8 text-center bg-white shadow-lg shadow-slate-950'>
        <h2 className='sm:text-xl font-bold text-black'>{heading}</h2>
        <h1 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-600'>{highlight}</h1>  
        <p className='text-black'>{content} </p>
        <button className='m-auto w-fit text-xs mt-5 p-2 shadow-sm shadow-black rounded-md text-black bg-slate-400 hover:bg-slate-200' onClick={(e)=>handleClick(e)}>{buttontext} &rarr;</button>
      </div>
    </>
  )
}

export default Card