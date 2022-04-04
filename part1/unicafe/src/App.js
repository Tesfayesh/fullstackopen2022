import { useState } from "react";

const Statistics = (props) => {
  const {good, neutral, bad} = props

  if ( good === 0 && neutral === 0 && bad === 0) {
        return (
          <div>
              <p>No feedback given</p>
          </div>          
        )} 
}

 const StatisticsLine = ({text, value}) => {
    value = String(value)
  return (    
    <div> 
      <table>
      <tbody>
        <tr>   
        <td>{text}</td>  
        <td>{value}</td>
        </tr>       
      </tbody>    
      </table>    
    </div>
  ) 
  }

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text}</button>
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
      <Button handleClick={handleGood}  text='good'/>
      <Button handleClick={handleNeutral}  text='neutral'/>
      <Button handleClick={handleBad}  text='bad'/>
      
      <h1>Statistics</h1>
          
      <StatisticsLine text = 'good' value = {good} />
      <StatisticsLine text = 'neutral' value = {neutral} />
      <StatisticsLine text = 'bad' value = {bad} />
      <StatisticsLine text = 'All' value = {good + neutral + bad} />
      <StatisticsLine text = 'Average' value = {((good * 1) + (neutral * 0) + (bad * -1)) / (good + neutral + bad)} />
      <StatisticsLine text = 'Positive' value = {((good / (good + neutral + bad)) * 100 ) + ' %' } />
      
      <Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
      />
    </div>
  )
}

export default App