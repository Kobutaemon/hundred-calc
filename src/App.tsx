import { useState } from "react"
import { Route, Routes } from 'react-router'
import Result from './components/Result/Result'
import "./App.css"
import Home from "./components/Home/Home"

function App() {
  const [count, setCount] = useState<number>(1)
  
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home count={count} setCount={setCount}/>} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  )
}

export default App