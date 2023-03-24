import React, {useState} from "react";



const Button = () => {
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

export default Button