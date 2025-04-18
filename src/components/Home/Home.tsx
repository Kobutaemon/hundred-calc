import React, { useState } from 'react'
import "./Home.css"
import { useNavigate } from 'react-router'
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface countProps {
  count: number,
  setCount: React.Dispatch<React.SetStateAction<number>>,
}

function Home({ count, setCount }: countProps) {

  const navigate = useNavigate()
  const [isComposing, setIsComposing] = useState(false);
  const [arithmetic, setArithmetic] = useState("+");

  const handleChange = (event: SelectChangeEvent) => {
    setArithmetic(event.target.value as string);
  };

  function checkUpper() { //countの値が100以内かチェック
    if (count > 100) {
      alert("生成問題数の上限は100問です。")
    }
    else {
      navigate("/result", { state: { count: count, arithmetic: arithmetic} })
    }
  }

  function handleKeyDown(event: { key: string }) { //エンターキーを押した時に呼び出される関数
    if (event.key === 'Enter' && !isComposing) {
      checkUpper()
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
                onChange={(e) => { setCount(Number(e.target.value)) }}
                id='counter-input'
                onKeyDown={handleKeyDown}
                onCompositionStart={() => { setIsComposing(true) }}
                onCompositionEnd={() => { setIsComposing(false) }}
              />
              <p className='upper-limit'>※上限100</p>
            </label>
            <div className="choice-arithmetic-container">
              <Box sx={{ minWidth: 100 }}>
                <FormControl fullWidth>
                  <InputLabel id="choice-arithmetic">四則演算</InputLabel>
                  <Select
                    labelId="choice-arithmetic"
                    id="arithmetic-select"
                    value={arithmetic}
                    label="arithmetic"
                    onChange={handleChange}
                  >
                    <MenuItem value={"+"}>+</MenuItem>
                    <MenuItem value={"ー"}>−</MenuItem>
                    <MenuItem value={"×"}>×</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          <Button variant='contained' onClick={checkUpper} className='generate-button'>生成</Button>
        </div>
      </div>
    </div>
  )
}

export default Home