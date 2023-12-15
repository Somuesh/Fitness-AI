import React from 'react'
import WorkoutCard from '../components/workoutCard/WorkoutCard'
import { useAppContext } from '../context/AppContext'

const Allworkout = () => {
    const {setAppState, workout} = useAppContext()

    const handleBack = (e)=>{
        setAppState(prev=>({
            ...prev,
            step: 'explore'
        }))
    }
    const handleAll = ()=>{
        setAppState(prev => ({
            ...prev,
            step: "all"
        }))
    }
    return (
        <>
            <div className='sm:text-3xl font-bold p-3 flex justify-center items-center text-center'>
            <button className='rounded-full bg-amber-200 text-black sm:text-xs max-sm:text-[10px] p-1 mx-1'
                onClick={handleBack}
            >&lt; </button>
            List of workout plans for you
            <button className='rounded-md bg-amber-200 text-black sm:text-xs max-sm:text-[10px]  p-1 mx-1' onClick={handleAll}>All workouts</button>
            </div>
            <div className='flex flex-wrap justify-center'>
            {workout.length !== 0 ? workout.slice(0,3).map((a)=>
                <div key={a.name} className='flex m-1 justify-center max-sm:items-center w-60'>
                    <WorkoutCard heading={a.name} instructions={a.instructions} type={a.type} equipment={a.equipment}/>
                </div>
            )
            :
            <h1>
                "No workout plans present, generate to load..."
                </h1>
            }
            </div>

        </>
    )
}

export default Allworkout