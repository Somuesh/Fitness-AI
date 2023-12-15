import React from 'react'

const WorkoutCard = ({ heading, instructions, type, equipment }) => {
    return (
        <>  
            <div className='m-2 flex flex-col justify-center text-center rounded-lg border p-[1.5em] bg-white text-black'>
                <h5 className='text-md font-bold m-2'>{heading}</h5>
                <img src='https://random.imagecdn.app/150/150' alt='workout img' className='rounded-full m-2 w-25' />
                
                <div className='flex space-x-2 text-[0.6rem] justify-between'>
                    <p className='text-start'>Type: <br/>{type}</p>
                    <p className='text-end'>Equipment: <br/>{equipment}</p>
                </div>
            </div>
        </>
    )
}

export default WorkoutCard