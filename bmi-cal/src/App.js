
import './App.css';
import React, { useEffect, useState } from "react";
function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState(0);
  let calbmi = (e) => {
    if (weight===0 || height===0) {
      alert('Enter Any Value')
      
    } else {
      let bmi=(weight/(height*height)*703)
      setBmi(bmi.toFixed(1))
    }
    if (bmi<25) {
      setMessage('you are underweight')
    } else if (bmi>=25 && bmi<30) {
      setMessage('you are a healthy')
    }else{
      setMessage('you are a over weight')
    }
  }
const Reload= () => { 
  useEffect(() => {
  const reloadTime = 5000; // Time in milliseconds (5 seconds)
  const timeout = setTimeout(() => {
    window.location.reload();
  }, reloadTime);

  return () => clearTimeout(timeout); // Cleanup timeout on component unmount
}, []);
  
}


  return (
    <div className="App">
      <div className="container">
        <h2>Calculator</h2>
        <form onSubmit={calbmi}>

          <div>
            <label>Weight(ibs)</label>
            <input type="text"
              placeholder="Enter Weight Value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height(in)</label>
            <input type="text"
              placeholder="Enter Height Value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
          </div>
          <div>
            <button className="btn btn-outline" onClick={Reload} type="submit">Reload</button>
          </div>
        </form>
        <div className="center">
          <h3>Your Bmi is:{bmi} </h3>
          <p>{message}</p>
        </div>

      </div>



    </div>
  );
}

export default App;

