import React from 'react'

const Bannertext = () => {
    return (
        <>
            <div className='backdrop-blur-sm text-white items-center flex flex-col justify-center sm:min-h-screen text-center'>
                <div>
                    <h1 className='sm:text-5xl font-semibold'>We are</h1>
                    <h1 className='sm:text-5xl font-semibold'>Fitness.AI</h1>
                </div>

                <h3 className='sm:text-2xl sm:p-10 max-sm:p-5'>Fit mind and body makes our life fit.</h3>

                <div className='max-sm:hidden flex flex-col items-center justify-center'>
                    <a href="#explore"><button className='border rounded px-5 py-2 text-white bg-slate-500 hover:bg-slate-300'>Explore</button></a>
                    <a href="#explore"><h2 className='sm:text-2xl p-4 cursor-pointer'>&darr;</h2></a>
                </div>
            </div>

        </>
    )
}

export default Bannertext