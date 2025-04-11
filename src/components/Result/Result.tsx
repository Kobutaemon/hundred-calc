import "./Result.css"
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router'


function Result() {
  const location = useLocation();
  const count = location.state;
  const questionOption: number[] = []

  for(let questionNumber = 0; questionNumber < count; questionNumber++) { //問題数のfor文
    for (let n = 0; n < 10; n++) { //10x10を作るためのfor文
      const randomNumber = Math.floor(Math.random() * 10);
      questionOption[n] += randomNumber
    }
  }
  console.log(questionOption.map(i => {i}))

  return (
    <div className='result-container'>
      <div className="result">
        <table>
          <tr>
            {/* {questionOption.map(i => <td>{i}</td>)} */}
          </tr>
        </table>
      </div>
      <Footer />
    </div>
  )
}

export default Result