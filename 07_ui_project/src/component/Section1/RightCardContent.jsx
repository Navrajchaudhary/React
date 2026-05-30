import React from 'react'

const RightCardContent = (props) => {
    
    return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>

            <h2 className='h-12 w-12 rounded-full bg-white flex items-center justify-center font-semibold text-xl'>{props.id}</h2>

            <div>
                <p className='text-white text-lg leading-relaxed'>{props.intro}</p>

                <div className='mt-6 flex justify-between items-center'>
                    <button style={{backgroundColor: props.color}} className=' py-2 px-7 rounded-full text-white'>{props.tag}</button>
                    <button style={{backgroundColor: props.color}} className=' py-2 px-4 rounded-full text-white'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>

    )
}

export default RightCardContent
