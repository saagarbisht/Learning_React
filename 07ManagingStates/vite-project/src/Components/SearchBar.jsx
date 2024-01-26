import React, { useState } from 'react'
import {foods} from './Data.js'

function SearchBar() {
    const [query, setQuery] = useState('');
    const handelSearch = (e) => {
        setQuery(e.target.value)
    }
    return (
        <div className='w-full h-screen bg-black flex justify-center items-start '>
            <div className='text-xl text-rose-600 mt-4 w-1/3 h-max  p-5  rounded-2xl  shadow-rose-300 shadow-sm flex flex-col justify-start align-center gap-4'> 
                <form className='flex flex-row gap-4 justify-center items-center'>
                <label htmlFor="searchBar">Search : </label>    
                <input type="search" id='searchBar' className='w-62 h-8 rounded-full outline-rose-600 bg-rose-200 px-6 py-5 text-2xl text-black' value={query} onChange={handelSearch}/>
                </form>
                <hr className='w-full border-2 border-rose-400 rounded-full'/>
                <List items={query ? filterList(foods,query) : foods}/>
            </div>
        </div>
    )
}

function List({items}){
    return(
        <table>
            <tbody className='text-lg text-rose-200'>
                {items.map(item => (
                    <tr key={item["id"]}>
                        <td>{item["name"]} : </td>
                        <td> {item["description"]}</td>
                    </tr>
                    
                ))}
            </tbody>
        </table>
    )
}

function filterList(items,query){
    query = query.toLowerCase();
    return items.filter(item => (
        item.name.split(" ").some(word => (
            word.toLowerCase().startsWith(query)
        ))
    ))
}

export default SearchBar