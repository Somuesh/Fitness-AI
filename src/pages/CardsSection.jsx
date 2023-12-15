import React from 'react'
import Explore from '../components/explore/Explore'
import { useAppContext } from '../context/AppContext'
import FormSection from './FormSection'
import Allworkout from './Allworkout'
import Listworkout from './Listworkout'


const CardsSection = () => {
    const { appState } = useAppContext()

    return (
        <>
            <section id="explore">
                <div className='flex flex-col justify-center items-center text-white bg-gradient-to-r from-indigo-500 to-red-200 p-[5.2rem] max-sm:p-[4.2rem]'>
                    {appState.step === 'explore' && <Explore />}
                    {appState.step === 'form' && <FormSection />}
                    {appState.step === 'browseAll' && <Allworkout />}
                    {appState.step === 'all' && <Listworkout />}
                </div>
            </section>
        </>
    )
}

export default CardsSection