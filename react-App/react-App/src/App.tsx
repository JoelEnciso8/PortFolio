import Button  from "./components/Button";
import React  from "react";



const App = () => {
  return (
    <div>
      <Button color= 'secondary' onClick={()=> console.log('Clicked')}>App</Button>
    </div>
  )
}

export default App