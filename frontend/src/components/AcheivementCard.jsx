import React from 'react'

const AcheivementCard = ({ title, description }) => {
    return (
        <div className='w-[300px] h-[300px] bg-slate-700 rounded-lg  p-2 flex justify-center items-center'>
            {/* Content */}
            <div className='bg-white w-[90%] h-[90%] rounded-lg flex flex-col  items-center p-2 gap-y-7'>
                {/* ICOONS */}
                <div className='bg-yellow-500 rounded-full w-[60px] h-[60px]  '></div>
                {/* Title */}
                <div className='text-xl font-bold'>{title}</div>
                <div className='text-sm font-thin'>{description}</div>
            </div>


        </div>
    )
}

export default AcheivementCard