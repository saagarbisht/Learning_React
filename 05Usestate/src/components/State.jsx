import React, { useState } from 'react'
import { sculptureList } from '../Sculpture'
function State() {
    let [index, setIndex] = useState(0);
    let [detail, setDetail] = useState(false);
    const onBtnClickNext = () => {
        if(index < sculptureList.length - 1) {
            setIndex(index + 1)
        }
    }
    const onBtnClickPrev = () => {
        if(index > 0) {
            setIndex(index - 1)
        }
    }

    const checkDetail = () => {
        setDetail(!detail)
    }

    let sculpture = sculptureList[index];
    return (
        <div className='w-full h-screen bg-black text-white flex justify-center items-center '>

            <div className='text-xl w-1/2 h-["400px"] border border-solid border-violet-500 flex flex-col gap-4 justify-center items-start p-6'>
                <div className='flex gap-4'>
                <button onClick={onBtnClickPrev} className='px-6 py-2 border rounded-sm border-violet-500 hover:bg-white hover:text-black duration-200 active:scale-95'>
                &#8592; previous
                </button>
                <button onClick={onBtnClickNext} className='px-6 py-2 border rounded-sm border-violet-500 hover:bg-white hover:text-black duration-200 active:scale-95 '>
                    next &#8594;
                </button>
                </div>
                <h2 className='text-3xl'>{sculpture["name"]}</h2>
                <div >
                    ( {index + 1} of {sculptureList.length} )
                </div>
                <img src={sculpture["url"]} alt={sculpture["alt"]} width={"150"}/>
                <button className='px-6 py-2 border rounded-sm  border-violet-500 hover:bg-white hover:text-black duration-200 active:scale-95' onClick={checkDetail}>
                    {detail ? "hide" : "show"} detail
                </button>
                <p>{detail && sculpture["description"]}</p>
            </div>
        </div>
    )
}

export default State