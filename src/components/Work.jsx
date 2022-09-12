import React from 'react'
import Projform from "../assets/projform.png"
import Projgpt from "../assets/projgpt3.png"
import Projgericht from "../assets/projgericht.png"
import ProjBootstrap from "../assets/projbootstrap.png"

const Work = () => {
    return (
        <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0A192F] pb-10'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-6'>Check out some of my recent projects</p>
                </div>
                {/*container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                    {/*grid item */}
                    <div className='shadow-lg shadow-color-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{backgroundImage:`url(${Projgericht})`}}>
                        {/*hover effect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Website
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Demo</button>
                                </a>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*grid item */}
                    <div className='shadow-lg shadow-color-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{backgroundImage:`url(${Projform})`}}>
                        {/*hover effect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Javascript Form
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Demo</button>
                                </a>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*grid item */}
                    <div className='shadow-lg shadow-color-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{backgroundImage:`url(${Projgpt})`}}>
                        {/*hover effect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Website
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Demo</button>
                                </a>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*grid item */}
                    <div className='shadow-lg shadow-color-[#040C16] group container rounded-md flex justify-center items-center mx-auto center-div' style={{backgroundImage:`url(${ProjBootstrap})`}}>
                        {/*hover effect*/}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Bootstrap Website
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Demo</button>
                                </a>
                                <a href="/" className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    <button>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work