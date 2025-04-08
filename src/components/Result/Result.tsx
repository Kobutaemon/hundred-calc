import React from 'react'
import "./Result.css"
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router'


function Result() {
  const location = useLocation();
  const count = location.state;
  const questionOption: number[] = []

  for (let n = 0; n < count; n++) {
    const randomNumber = Math.floor(Math.random() * 10);
    questionOption[n] += randomNumber
  }

  return (
    <div className='result-container'>
      <div className="result">
        <table>
          <tr>
            {questionOption.map(i => <td key={}>{i}</td>)}
          </tr>
        </table>
      </div>
      <Footer />
    </div>
  )
}

export default Result