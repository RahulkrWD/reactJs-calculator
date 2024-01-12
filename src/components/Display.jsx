import React from 'react'

function Display({dispalyVal}) {
  return (
    <>
       <input type="text" id="inputText" value={dispalyVal} readOnly />
    </>
  )
}

export default Display
