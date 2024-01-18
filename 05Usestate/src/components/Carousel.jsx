import React, { Children, useState } from 'react'
import { BsCircle, BsCircleFill, BsChevronRight, BsChevronLeft } from 'react-icons/bs'


function Carousel({data}) {
    const[index, setIndex] = useState(0)
    const next = () => {
        index === data.length - 1 ? setIndex(0) : setIndex(index + 1);
    }
    const previous = () => {
        index === 0 ? setIndex(data.length - 1) : setIndex(index - 1);
    }
    return (
        <div 
        id='carousel-container' 
        aria-label='carousel-container' 
        className='max-w-["1440px"] w-full h-["360px"] relative mx-auto'>
            <div 
            id='carousel-image' 
            aria-label='carousel-image'
            className='w-full h-full flex overflow-hidden'>
                {
                    data.map(imgData => 
                        <img key={imgData.id} 
                        src={imgData.url} 
                        alt={imgData.imgName} 
                        style={{translate :`${-100 * index}%`}}
                        className='object-cover w-full h-full block shrink-0 flex-grow-0 duration-500'/>
                        )
                }
            </div>
            <div 
            id='carousel-buttons' 
            aria-label='carousel-buttons'
            className='flex'>
                <button 
                className='absolute top-0 bottom-0 left-0 px-2 sm:px-6 hover:bg-[rgba(0,0,0,0.1)] duration-150'
                onClick={previous}>
                    <BsChevronLeft className='text-xl sm:text-3xl'/>
                </button>
                <button 
                className='absolute top-0 bottom-0 right-0 px-2 sm:px-6 hover:bg-[rgba(0,0,0,0.1)] duration-150'
                onClick={next}>
                    <BsChevronRight className='text-xl sm:text-3xl'/>
                </button>
            </div>
            <div 
            id='carousel-navigator' 
            aria-label='carousel-navigator'
            className='flex gap-3 absolute bottom-0.5 sm:bottom-2 left-1/2 -translate-x-1/2 cursor-pointer'>
                    {data.map((_,idx) => 
                        <button 
                        className='hover:scale-125 duration-150 text-base sm:text-md'
                        onClick={() => setIndex(idx)}>
                            {index === idx ? <BsCircleFill /> : <BsCircle /> }
                        </button>
                    )}
            </div>
        </div>
    )
}

export default Carousel