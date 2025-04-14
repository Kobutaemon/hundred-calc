import React, { useState } from 'react'
import "./Home.css"
import { useNavigate } from 'react-router'
import { Button } from '@mui/material'

interface countProps {
  count: number,
  setCount: React.Dispatch<React.SetStateAction<number>>,
}

function Home({count, setCount}: countProps) {
  
  const navigate = useNavigate()
  const [isComposing, setIsComposing] = useState(false);

  function handleKeyDown(event: { key: string }) {
    if (event.key === 'Enter' && !isComposing) {
      // 入力を確定したときの処理（送信・表示・入力フォームのクリアなど）
      navigate("/result", {state: count});
    }
  }

  function checkUpper() {
    if (count > 100) {
      alert("生成問題数の上限は100問です。")
    }
    else {
      navigate("/result", {state: count})
    }
  }

  return (
    <div className="container">
      <div className='title-container'>
        <h1>百マス計算生成</h1>
        <div className="generate-container">
          <div className="counter">
            <label htmlFor="counter-input">
              問題数：
              <input 
                type='number'
                className='counter-number no-spin'
                value={count}
                onChange={(e) => {setCount(Number(e.target.value))}}
                id='counter-input'
                onKeyDown={handleKeyDown}
                onCompositionStart={() => {setIsComposing(true)}}
                onCompositionEnd={() => {setIsComposing(false)}}
                placeholder='上限100'
              />
              <p className='upper-limit'>※上限100</p>
            </label>
          </div>
          <Button variant='contained' onClick={checkUpper} className='generate-button'>生成</Button>
        </div>
      </div>
    </div>
  )
}

export default Home