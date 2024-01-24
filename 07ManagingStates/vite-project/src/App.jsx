import React, {useState} from "react"
function App() {
  const [answer, setAnswer] = useState('');
  const [chance, setchance] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if(status === 'success'){
    return(
      <div className="bg-black w-full h-screen flex justify-center items-center">
        <h1 className="text-center text-4xl text-rose-300">That's right</h1>
      </div>
    )
  }

  const handelInputChange = (e) => {
    setAnswer(e.target.value)
    setError(null)
  }
  const handelSubmit = async(e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setAnswer('')
      setError(err)
      setchance([...chance,answer])
    }

  }
  function submitForm(answer){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(answer !== '2001'){
          reject(new Error('better luck next time "Baka"'))
        }else{
          resolve()
        }
      },1000)
    })
  }
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="w-96 h-96 border-2 border-rose-600 rounded-lg flex flex-col gap-6">
        <h1 className="text-center text-rose-300 text-3xl font-bold">Quiz</h1>
        <hr className="w-full border-rose-300"/>
        <form className="flex flex-col gap-4" onSubmit={handelSubmit}> 
          <p className="text-rose-300 text-center text-xl">How many times did Zoro lose to Kuina?</p>
          <input 
          type="number" 
          className="w-52 h-7 mx-auto rounded-xl px-3 py-2 text-center text-xl bg-rose-200 outline-rose-600 text-rose-950"
          value={answer}
          onChange={handelInputChange}
          />
          <button 
          className="bg-rose-300 w-32 h-8 text-xl text-rose-950 mx-auto rounded-full text-center disabled:opacity-10"
          disabled = {answer.length === 0 || status === 'submitting'}
          >Submit</button>
          {error !== null && <p className="text-rose-600 text-center">{error.message}</p>}
          <div className="text-rose-600 block mx-2">
            <h2 className="text-xl inline-block">
              history :  
            </h2>{" "}
            {chance.map(e => <span className="text-rose-700">{e}, </span>)}
          </div>
        </form>
          <button className="bg-rose-300 w-24 h-8 text-xl text-rose-950 rounded-xl text-center mx-2"
          onClick={() => setchance([])}
          >clear</button>
      </div>
    </div>
  )
}

export default App
