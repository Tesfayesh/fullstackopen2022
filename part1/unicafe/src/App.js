import { useState } from "react";

const Statistics = (props) => {
  const {good, neutral, bad} = props
  return(
    <div>
      <p>All {good + neutral + bad}</p>
      <p>Average {((good * 1) + (neutral * 0) + (bad * -1)) / (good + neutral + bad)}</p>
      <p>Positive {(good / (good + neutral + bad)) * 100} %</p>
    </div>

  )
 
}

const App = () =>{

  //saving the button to their own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <h1>Statistics</h1>

      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>

      <Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
      />
      
    </div>
  )
}

export default App