import React from 'react'
import "./Result.css"
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router'

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) //Math.random()で0から1の間のランダムな数値を生成したものを、Math.floorでそれ以下の整数にする 
}

function Result() {
  const location = useLocation()
  const count = location.state

  function generateQuestion(): React.ReactNode {
    // ランダム生成の数字を配列に入れ、それをmap関数で取り出す
    for ( let n = 0; n < count; n++) {
      const i: number[] = []
    }
    return
  }

  return (
    <div className='result-container'>
      <div className="result">
        { generateQuestion() }
      </div>
      <Footer />
    </div>
  )
}

export default Result