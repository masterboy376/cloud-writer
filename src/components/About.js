import React from 'react'

export default function About() {
    return (
        <>
            <div className='min-h-screen w-full pt-16 bg-gradient-to-r from-violet-400 to-fuchsia-400 flex flex-col  items-center'>
            <div className="sm:w-full w-3/4 px-4 py-4 flex flex-col justify-center items-center rounded-lg font-sans">
                <div>
            <h1 className="font-sans sm:text-3xl my-2 text-center text-5xl text-gray-800 ">About Cloud Writer</h1>
            <p className="font-sans sm:text-base my-2 text-center text-xl text-gray-800 ">We are cloud writer, a application which alow you to save your notes on the cloud in a secure envirnment. Also, we allow you to update, delete, and filter your notes very easily. Thank you and regards.</p>
                </div>
                <div>
            <h1 className="font-sans sm:text-3xl my-2 text-center text-5xl text-gray-800 ">About the developer</h1>
            <p className="font-sans sm:text-base my-2 text-center text-xl text-gray-800 ">Hello, I am Sambhav Kaushik, a young full stack (both frontend and backend) developer from India. I started my web development journey one and the half years ago and with time I am gaining the much needed experience over time. Feel free to contact if you need help in any of your project. Portfolio: sdgsdggdsg</p>
                </div>

            </div>

            </div>
        </>
    )
}
