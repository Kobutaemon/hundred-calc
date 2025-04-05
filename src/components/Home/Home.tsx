import React, { useState } from 'react'
import "./Home.css"

function Home() {
  const [count, setCount] = useState<number>(1)
  
  return (
    <div className="container">
      <div className='title-container'>
        <h1>百マス計算生成</h1>
        <div className="generate-container">
          <div className="counter">
            <label htmlFor="counter-input">
              個数：
              <input 
                type='number'
                className='counter-number no-spin'
                value={count}
                onChange={(e) => {setCount(Number(e.target.value))}}
                id='counter-input'
              />  
            </label>
          </div>
          <button onClick={() => {window.location.href="/Result"}} className='generate-button'>生成</button>
        </div>
      </div>
    </div>
  )
}

export default Home