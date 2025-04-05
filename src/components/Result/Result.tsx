import React from 'react'
import "./Result.css"
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router'

// function generateRandomNumber() {
//   return Math.floor(Math.random() * 10) //Math.random()で0から1の間のランダムな数値を生成したものを、Math.floorでそれ以下の整数にする 
// }

// function generateQuestion() {
//   // ランダム生成の数字を配列に入れ、それをmap関数で取り出す

// }

function Result() {
  const location = useLocation()
  const count = location.state

  return (
    <div className='Result'>
      {count}
      <Footer />
    </div>
  )
}

export default Result