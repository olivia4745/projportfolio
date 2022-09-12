import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"
import {Link} from "react-scroll"

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0A192F]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>  {/*container*/}
                <p className='text-pink-600'>Hi, I'm</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#CCD6F6]'>Olivia Moyede</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892B0]'>I'm a Web Developer.</h2>
                <p className='text-[#8892B0] py-4 max-w-[700px]'>I specialize in designing and developing websites and website applications using a variety of programming languages and web technologies.</p>
                <div>
                <Link to="work" smooth={true} duration={800}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View My Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-2'/>
                    </span>
                    </button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Home