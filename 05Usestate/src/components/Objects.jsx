import React, { useState } from 'react'

function Objects() {
    const [pointer, setPointer] = useState({x:0,y:0})
    return (
        <div className='w-full h-screen bg-black'>
            onPointerMove = {e => 
            setPointer({x : e.clientX, y: e.clientY})
            }
            <div 
            className={`absolute w-10 h-10 rounded-full bg-violet-500 -top-6 -left-6`}
            style={{transform : `translate(${pointer.x}px, ${pointer.y}px)`}}
            >
            </div>
        </div>
    )
}

export default Objects