import { useId } from "react";
import Filter from "./Filter";

function App() {
  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];
  const data = people.map((peop,idx) => <li key={idx}>{peop}</li>)
  return (
    <>
    <ul>
      {data}
    </ul>
    <Filter/>
    </>
  )
}

export default App
