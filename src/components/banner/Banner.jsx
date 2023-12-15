import React from 'react'
import Bannertext from './Bannertext'

const Banner = () => {
    return (
        <>
            <div className='absolute z-[-1]'>
                <video src='./we-are-fitness-web.mp4'
                    autoPlay={true} loop muted
                >
                </video>
            </div>
            <Bannertext />
        </>
    )
}

export default Banner