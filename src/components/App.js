
import React, {useState} from "react";
import './../styles/App.css';


const App = () => {
  const [ct, setCt] = useState(0);
  function increase(){
    setCt(ct+1);

  }
  return (
    <div>
        {/* Do not remove the main div */}
    <p>Button clicked {ct} times</p>
    <button onClick={increase}>Increase</button>
    
    </div>
  )
}

export default App
