import React from 'react'
import Card from '../card/Card'


const Explore = () => {
    return (
        <>
            <h2 className='sm:text-3xl font-bold p-3'>Explore the process</h2>
            <div className='flex max-sm:flex-col p-2 justify-center items-center'>
                <div className='flex max-sm:flex-col'>
                    <Card heading="Generate plan using" highlight="AI" content="Create own workout plan with our generative AI tool" buttontext="Generate now" />
                    <Card heading="Browse" highlight="Generated Plans" content="Explore all generated workout plans and work to stay fit" buttontext="See" />
                    <Card heading="All" highlight="workout Plans" content="Explore all workout plans amd make yourself fit" buttontext="All" />
                </div>
            </div>
        </>
    )
}

export default Explore