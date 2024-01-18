import React from "react"
import EventHandler from "./components/EventHandler"
import States from "./components/States"
function Handler({btn1,btn2}){
  return(
    <div style={{display : "flex", gap : "2rem", flexDirection : "column",}}>
      <button onClick={btn1}>Button1 Click me</button>
      <button onClick={btn2}>Are you ok</button>
    </div>
  )
}

function Play({movie}){
  function handlePlay(){
    alert(`watch ${movie}`)
  }
  return(
    <>
      <EventHandler event={handlePlay}>
        Click to Watch {movie}
      </EventHandler>
    </>
  )
}

function Download(){
  return (
    <EventHandler event={() => alert("downloading.....")}>
        click to doenload 12th fail
    </EventHandler>
  )
}

function App() {
  function cryBaby(){
    alert("you are a cry baby")
  }
    return (
    <div style={{display : "flex", gap : "2rem", flexDirection : "column",}}>
      <Handler btn1 = {() => alert("alert btn1")} btn2 = {() => confirm("Are you ok")}/>
      <EventHandler message = {"Sagar"}>
        Click me
      </EventHandler>
      <button onClick={cryBaby}>Cry</button>
      <Play movie={"12th fail"} />
      <Download/>
      <States/>
    </div>
  )
}

export default App
