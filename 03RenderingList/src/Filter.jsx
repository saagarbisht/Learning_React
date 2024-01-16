import React from 'react'

function Filter() {
    const people = [{
            id: 0,
            name: 'Creola Katherine Johnson',
            profession: 'mathematician',
        }, {
            id: 1,
            name: 'Mario José Molina-Pasquel Henríquez',
            profession: 'chemist',
        }, {
            id: 2,
            name: 'Mohammad Abdus Salam',
            profession: 'physicist',
        }, {
            id:3,
            name: 'Percy Lavon Julian',
            profession: 'chemist',  
        }, {
            id:4,
            name: 'Subrahmanyan Chandrasekhar',
            profession: 'astrophysicist',
        }];
    return (
    <>
    <ul>
        {people.filter(fil => fil["profession"] === "physicist").map(per => <li key={per.id}>{per["name"]} : {per["profession"]}</li>)}
    </ul>
    </>
    ) 
}

export default Filter