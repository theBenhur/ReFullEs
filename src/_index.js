import React,{useState} from 'react';
import ReactDOM from 'react-dom';
const Statics=({good,neutral,bad})=>{
  if(good || neutral || bad)
    return(
      <div>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All {good+neutral+bad}</p>
        
        <p>Average {(good-bad)/(good+neutral+bad)}</p>
        <p>Positive {(good/(good+neutral+bad))*100}</p>
      </div>
    )
  return(
    <div>
      <p>No feedback given</p>
    </div>
  )
}
const Static=({text,value})=>{
  return(
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}
const Button=({fun,text})=>{
  return(
    <button onClick={fun}>{text}</button>
  )
}
const App=()=>{
  const [feedback,setFeedback]=useState({
    'good':0,
    'neutral':0,
    'bad':0
  })
  const addGood=()=>{
    let newFeedback={
      ...feedback,
      'good':feedback.good+1
    }
    setFeedback(newFeedback)
  }
  const addNeutral=()=>{
    let newFeedback={
      ...feedback,
      'neutral':feedback.neutral+1
    }
    setFeedback(newFeedback)
  }
  const addBad=()=>{
    let newFeedback={
      ...feedback,
      'bad':feedback.bad+1
    }
    setFeedback(newFeedback)
  }
  
  return(
  <div>
    <h1>Get feedback</h1>
    <Button fun={addGood} text={"Good"}/>
    <Button fun={addNeutral} text={"Neutral"}/>
    <Button fun={addBad} text={"Bad"}/>
    <h1>Statics</h1>
    <table>
      <tbody>
        <Static text={"Good"} value={feedback.good}/>
        <Static text={"Neutral"} value={feedback.neutral}/>
        <Static text={"Bad"} value={feedback.bad}/>
        <Static text={"All"} value={feedback.good+feedback.neutral+feedback.bad}/>
        <Static text={"Avarege"} value={(feedback.good-feedback.bad)/(feedback.good+feedback.neutral+feedback.bad)}/>
        <Static text={"Positive"} value={(feedback.good/(feedback.good+feedback.neutral+feedback.bad))*100}/>
      </tbody>
    </table>
    {/* <Statics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad}/> */}
    
  </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'))