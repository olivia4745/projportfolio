import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen bg-[#0A192F] flex justify-center items-center p-4 pt-8'>
            <form method='POST'action="https://getform.io/f/e459a886-92f7-4e42-ad39-f43989b2cc05" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact Me!</p>
                    <p className='text-gray-300 py-4'>Submit the form below or send me an e-mail - oliviatmoyede@gmail.com</p>
                </div>
                <input type="text" placeholder='Name' name='name' className='bg-[#CCD6F6] p-2'/>
                <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#CCD6F6]'/>
                <textarea name="message" rows="10" className='bg-[#CCD6F6] p-2' placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate</button>
            </form>
        </div>
    )
}

export default Contact