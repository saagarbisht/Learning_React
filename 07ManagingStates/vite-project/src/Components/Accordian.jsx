import React, { useState } from 'react'

function Accordian() {
    const [activeIndex, setActioveIndex] = useState(-1);

    return (
        <div className='w-full h-screen bg-violet-400 flex justify-center items-start pt-6'>
            <div className='w-1/2 h-80'>
                <Panel
                title={"Fake Text 1"}
                isActive={activeIndex === 0}
                onShow={()=>setActioveIndex(0)}
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis provident nesciunt error quas dolorem facere esse aut adipisci aliquam reiciendis!
                </Panel>
                <Panel
                title={"Fake Text 2"}
                isActive={activeIndex === 1}
                onShow={()=>setActioveIndex(1)}
                className="border-2 border-violet-950"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis provident nesciunt error quas dolorem facere esse aut adipisci aliquam reiciendis!
                </Panel>
                <Panel
                title={"Fake Text 3"}
                isActive={activeIndex === 2}
                onShow={()=>setActioveIndex(2)}
                className="border-2 border-violet-950"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis provident nesciunt error quas dolorem facere esse aut adipisci aliquam reiciendis!
                </Panel>
                <Panel
                title={"Fake Text 4"}
                isActive={activeIndex === 3}
                onShow={()=>setActioveIndex(3)}
                className="border-2 border-violet-950"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis provident nesciunt error quas dolorem facere esse aut adipisci aliquam reiciendis!
                </Panel>
            </div>
        </div>
    )
}

function Panel({
    title,
    children,
    isActive,
    onShow
}){
    return(
        <section className='w-full text-justify border-2 border-violet-950 p-4 rounded-xl mb-1 flex flex-col gap-4'>
            <h1 className='text-3xl text-black font-bold underline'>{title}</h1>
            {isActive ? <p>{children}</p> : <button onClick={onShow} className='border-2 border-violet-950 w-20 py-1 rounded-xl text-xl'>Show</button>}
        </section>
    )
}

export default Accordian