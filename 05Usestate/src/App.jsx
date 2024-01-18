import Carousel from "./components/Carousel"
import { IMAGES } from "./imageData"
function App() {

  return (
    <div> 
      <Carousel data={IMAGES}/>
    </div>
  )
}

export default App
