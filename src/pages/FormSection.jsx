import React from 'react'
import { useAppContext } from '../context/AppContext'
// import dotenv from "dotenv"
// dotenv.config()

const FormSection = () => {
    const { appState, setAppState, setWorkout } = useAppContext()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (e.target.innerHTML === 'Back') {
            setAppState(prev => ({
                ...prev,
                step: 'explore'
            }))
            // console.log("form page back button",appState)
        }
        else if (e.target.innerHTML === 'Generate'){
            if(appState.muscle_group && appState.fitness && appState.age && appState.duration && appState.gender){
                setAppState(prev => ({
                    ...prev,
                    step: "browseAll"
                }))
                const fetchInfo = async (muscles, fitness) => {
                    try {
                      const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscles}&difficulty=${fitness}`, {
                        mode: 'cors',
                        headers: {
                          'X-Api-Key': process.env.REACT_APP_API_KEY
                        }
                      });
                      const data = await response.json();
                      await setWorkout(data)
                    }
                    catch (e) {
                      console.log("error message on submit",e.message)
                    }
                  }
    
                 fetchInfo(appState.muscle_group, appState.fitness);
            }   
            else{
                alert("All fields are mandatory!")
            }
        }
        else{
            console.log("Wrong click")
        }
    }

    return (
        <>
            <section id='formsection' className='max-sm: min-w-screen'>
                <h2 className='sm:text-3xl font-bold justify-center text-center'>Genrate your workout plan using AI</h2>
                <div className='flex flex-col p-1 justify-center items-center'>
                    <form className='p-4 flex flex-col justify-center items-stretch'>
                        <div className='flex max-sm:flex-col'>
                            <select className='m-1 p-2 rounded text-slate-500 sm:w-3/5' onChange={(e) => setAppState(prev => ({
                                ...prev,
                                duration: e.target.value
                            }))}>
                                <option defaultValue="">Select Duration</option>
                                <option value="30min">30 min</option>
                                <option value="1hour">1 hour</option>
                                <option value="2hour">2 hour</option>
                                <option value="2.5hour">2.5 hour</option>
                            </select>

                            <select className='m-1 p-2 rounded text-slate-500' onChange={(e) => setAppState(prev => ({
                                ...prev,
                                fitness: e.target.value
                            }))}>
                                <option defaultValue="">Choose Fitness level</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="expert">Expert</option>
                            </select>
                        </div>
                        <div className='flex max-sm:flex-col'>
                            <input type='text' placeholder='Age' className='m-1 p-2 text-slate-500 rounded' onChange={(e) => setAppState(prev => ({
                                ...prev,
                                age: e.target.value
                            }))} />
                            <select className='m-1 p-2 rounded text-slate-500 sm:w-2/3' onChange={(e) => setAppState(prev => ({
                                ...prev,
                                gender: e.target.value
                            }))}>
                                <option defaultValue="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <select className='m-1 p-2 rounded text-slate-500' onChange={(e) => setAppState(prev => ({
                            ...prev,
                            muscle_group: e.target.value
                        }))}>
                            <option value="">Choose Muscle Group</option>
                            <option value="abdominals">Abdominals</option>
                            <option value="biceps">Biceps</option>
                            <option value="calves">Calves</option>
                            <option value="forearms">Forearms</option>
                            <option value="middle_back">Middle back</option>
                            <option value="lower_back">Lower back</option>
                            <option value="neck">Neck</option>
                            <option value="quadriceps">Quadriceps</option>
                            <option value="triceps">Triceps</option>
                        </select>
                        <div className='flex flex-row'>
                            <button className='m-1 border rounded px-5 py-2 w-1/2 text-white bg-slate-500 hover:bg-slate-300'
                                onClick={(e) => handleSubmit(e)}
                            >Back</button>
                            <button className='m-1 border rounded px-5 py-2 w-1/2 text-white bg-slate-500 hover:bg-slate-300'
                                onClick={(e) => handleSubmit(e)}
                            >Generate</button>
                        </div>
                    </form>

                </div>
            </section>
        </>
    )
}

export default FormSection