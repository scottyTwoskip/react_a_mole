import { useState } from 'react'
import MoleContainer from './MoleContainer'


function App() {
  let [score, setScore] = useState(0)
  //mole hill
  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer
          key={i}
          setScore={setScore}
          score={score} />
      )
    }

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {hills}
      </div>
    )
  }
  //moleBop

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      <h2>score: {score}</h2>
      {createMoleHill()}
    </div>
  )
}

export default App
