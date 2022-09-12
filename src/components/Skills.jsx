import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Bootstrap from '../assets/bootstrap.png';
import Tailwind from '../assets/tailwind.png';
import GitHub from '../assets/github.png';
import Node from '../assets/node.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0A192F] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'> {/*container */}
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                    <p className='py-4'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                        <img src={HTML} alt="html icon" className='w-20 mx-auto pt-4'/>
                        <p className='my-2'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                        <img src={CSS} alt="html icon" className='w-20 mx-auto pt-4'/>
                        <p className='my-2'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                        <img src={JavaScript} alt="html icon" className='w-20 mx-auto pt-4'/>
                        <p className='my-2'>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                        <img src={ReactImg} alt="html icon" className='w-20 mx-auto pt-4'/>
                        <p className='my-2'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                        <img src={Bootstrap} alt="html icon" className='w-20 mx-auto pt-4'/>
                        <p className='my-2'>Bootstrap</p>
                    </div>
                    <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                        <img src={Tailwind} alt="html icon" className='w-20 mx-auto pt-4'/>
                        <p className='my-2'>Tailwind CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                        <img src={GitHub} alt="html icon" className='w-20 mx-auto pt-4'/>
                        <p className='my-2'>GitHub</p>
                    </div>
                    <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                        <img src={Node} alt="html icon" className='w-20 mx-auto pt-4'/>
                        <p className='my-2'>Node JS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills