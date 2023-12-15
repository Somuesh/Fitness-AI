import React, { useEffect, useState } from 'react'
import WorkoutCard from '../components/workoutCard/WorkoutCard'
import { useAppContext } from '../context/AppContext'

const Listworkout = () => {
    const { setAppState } = useAppContext()
    const [allworkout, setAllworkout] = useState([])

    const handleBack = (e) => {
        setAppState(prev => ({
            ...prev,
            step: 'explore'
        }))
    }


    const fetchInfo = async () => {
        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/exercises`, {
                mode: 'cors',
                headers: {
                    'X-Api-Key': process.env.REACT_APP_API_KEY
                }
            });
            const data = await response.json();
            setAllworkout(data)
        }
        catch (e) {
            console.log("error message on submit", e.message)
        }
    }
    useEffect(()=>{
        fetchInfo()
    },[])


    return (
        <>
            <div className='sm:text-3xl font-bold p-3 flex justify-center items-center'>
                <button className='rounded-full bg-amber-200 text-black text-sm p-1 m-1'
                    onClick={handleBack}
                >&lt; </button>
                All workout plans
            </div>
            <div className='flex flex-wrap justify-center'>
                {
                    allworkout.length !== 0 ? allworkout.map((a) =>
                    <div key={a.name} className='flex m-1 justify-center max-sm:items-center w-60'>
                        <WorkoutCard heading={a.name} instructions={a.instructions} type={a.type} equipment={a.equipment} />
                    </div>
                )
                :
                <h2>Loading...</h2>
                }
            </div>

        </>
    )
}

export default Listworkout