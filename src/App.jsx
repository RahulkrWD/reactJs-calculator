import React, { useState } from 'react'
import "./App.css"
import Heading from './components/Heading'
import Display from './components/Display'
import Buttons from './components/Buttons'

function App() {
  let [calVal, setVal] = useState("")
  function val(buttonText){
    // console.log(buttonText)
    let newNum = calVal + buttonText
    if(buttonText === "C"){
      setVal("");
    }
    else if(buttonText === "="){
      let result = eval(calVal);
      setVal(result)
    }
    else{
      setVal(newNum)
    }
   


  }
  return (
    <>
    
    <div className="calculator">
      <center>
      <Heading/>
      </center>
      <div className="display">
       <Display dispalyVal={calVal}/>
      </div>
      <div className="buttons-container">
      </div>
      <center>
      <Buttons onButtonClick={val}/>
      </center>
      
    </div>
    </>
  )
}

export default App;
