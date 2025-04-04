import React, { useState } from 'react'
import "./App.css"

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) //Math.random()で0から1の間のランダムな数値を生成したものを、Math.floorでそれ以下の整数にする 
}

function generateQuestionAnyNumber() {
  const generateHowMany: any = document.getElementById("generateHowMany")
  for (let i = 0; i < generateHowMany.value; i++) {
    return
  }
}

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="container">
      <div className='title-container'>
        <h1>百マス計算生成</h1>
        <div className="generate-container">
          <div className="counter">
            <button className='minus' onClick={() => {count > 0 ? setCount(count - 1):false}}><img width="50" height="50" src="https://img.icons8.com/ios/50/minus.png" alt="マイナスボタン"/></button>
            <h3 className='counter-number'>{count}</h3>
            <button className="plus" onClick={() => {setCount(count + 1)}}><img width="50" height="50" src="https://img.icons8.com/ios/50/plus--v1.png" alt="プラスボタン"/></button>
          </div>
          <button onClick={generateQuestionAnyNumber} className='generate-button'>生成</button>
        </div>
      </div>
      <div className="main-container"></div>
    </div>
  )
}

export default App