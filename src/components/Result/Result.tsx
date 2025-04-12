import "./Result.css";
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';


type Question = {
  rows: number[];
  columns: number[];
};

function Result() {
  const location = useLocation();
  const count: number = location.state;
  const [questions, setQuestions] = useState<Question[]>([]);

  //rowsとcolumnsに乱数を入れ、returnする関数
  function generateQuestion(): Question {
    const rows = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
    const columns = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
    console.log(rows, columns)
    return { rows, columns };
  }

  useEffect(() => {
    const generatedQuestions: Question[] = [];
    for (let i = 0; i < count; i++) {
      generatedQuestions.push(generateQuestion());
    }
    setQuestions(generatedQuestions);
  }, [count]);

  return (
    <div className='result-container'>
      <div className="result">
        {questions.map((question, index) => (
          <div key={index} className="question-table">
            <h3>問題 {index + 1}</h3>
            <table>
              <thead>
                <tr>
                  <th></th>
                  {question.columns.map((col, i) => (
                    <th key={`col-${i}`}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {question.rows.map((row, i) => (
                  <tr key={`row-${i}`}>
                    <th>{row}</th>
                    {question.columns.map((_, j) => (
                      <td key={`cell-${i}-${j}`}></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Result;
