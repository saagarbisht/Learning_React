import React from 'react'

function Image({name,age,gender,hobbies,lovesAnime}) {
    let love = lovesAnime && "Anime";
    return (
        <>
            <p>My name is {name} i am  {age} years old, i'm a {gender} my gender, i don't have very often popular hobbies but here are some {hobbies} and i also do love {love} </p>
        </>
    )
}

export default Image