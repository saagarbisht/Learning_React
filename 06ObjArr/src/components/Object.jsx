import React from 'react';
import { useImmer } from 'use-immer';
function Object() {
const [person, updatePeson] = useImmer({
    name : "",
    title : "",
    city : "",
})
const handlePerson = (e) => {
    updatePeson(draft => {
        draft.name = e.target.value})
}
const handleTitle = (e) => {
    updatePeson(draft => {
        draft.title = e.target.value})
}
const handleCity = (e) => {
    updatePeson(draft => {
        draft.city = e.target.value})
}
    return (
        <div className='w-full h-screen flex justify-center items-center bg-black'>
            <div className='w-1/2 h-96 border-2 border-violet-500 rounded-xl p-4 flex flex-col justify-start items-center gap-4'>
                <div>
                    <label htmlFor='name' className='text-white text-3xl'>Name : </label>
                    <input 
                    id='name'
                    type="text" 
                    value={person.name} 
                    onChange={handlePerson} 
                    className='bg-[rgba(255,255,255,0.5)] text-xl font-bold px-4 py-2 rounded-xl outline-violet-500'/>
                </div>
                <div >
                    <label htmlFor='title' className='text-white text-3xl'>Title : </label>
                    <input 
                    id='title'
                    type="text" 
                    value={person.title} 
                    onChange={handleTitle} 
                    className='bg-[rgba(255,255,255,0.5)] text-xl font-bold px-4 py-2 rounded-xl outline-violet-500'/>
                </div>
                <div >
                    <label htmlFor='city' className='text-white text-3xl'>City : </label>
                    <input 
                    id='city'
                    type="text" 
                    value={person.city} 
                    onChange={handleCity} 
                    className='bg-[rgba(255,255,255,0.5)] text-xl font-bold px-4 py-2 rounded-xl outline-violet-500'/>
                </div>
                <p className='text-center text-violet-500 text-3xl'>{person.name}</p>
                <p className='text-center text-violet-500 text-3xl'>{person.title}</p>
                <p className='text-center text-violet-500 text-3xl'>{person.city}</p>
            </div>
        </div>
    )
}

export default Object