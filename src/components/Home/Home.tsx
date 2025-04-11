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
          <Button variant='contained' onClick={() => {navigate("/result", {state: count})}} className='generate-button'>生成</Button>
        </div>
      </div>
    </div>
  )
}

export default Home