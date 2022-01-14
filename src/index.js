import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const MostVoted=({index,votes})=>{
    return(
        <div>
        <h1>Anecdote with most votes</h1>
        <p><em>{anecdotes[index]}</em></p>
        <p>has {votes} votes</p>
        </div>
    )
}
const App = (props) => {
    const MIN=0
    const MAX=anecdotes.length-1
    const computeRandom=() => Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
    const [selected, setSelected] = useState(computeRandom)
    const [votes,setVotes] = useState(Array(anecdotes.length).fill(0))
    const changeQuote=()=>{
        const random=computeRandom
        setSelected(random)
    }
    const addVote=(index)=>{
        const copyVotes=[...votes]
        copyVotes[index]+=1
        setVotes(copyVotes)
    }
  return (
    <div>
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <p><button onClick={changeQuote}>Generate quote</button>
      <button onClick={()=>addVote(selected)}>Vote</button></p>
      <MostVoted index={votes.indexOf(Math.max(...votes))} votes={Math.max(...votes)}/>
    </div>
  )
}
const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)