import React from "react"
import Image from "./Image"
function App() {
  const person1 = {
    name : "Sagar",
    age : 22,
    gender : "Male",
    hobbies : "Programming",
    lovesAnime : true,
  }
  return (
    <>
      <Image {...person1}/>
    </>
  )
}

export default App
