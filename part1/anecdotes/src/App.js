import './App.css';
import data from "./anecdotas"

import { useState, useEffect} from 'react'
const App = () => {

const [anecdotes, setAnecdotes]=useState(data)
const [position, setPosition]=useState(0)
const [currentAnecdote, setCurrentAnecdotes]=useState(anecdotes[position])
const [max, setmax]=useState(getMostVotes())
useEffect(()=>{
  setCurrentAnecdotes(anecdotes[position])
  
},[anecdotes,position])


function getMostVotes(){
  const data= anecdotes.map(anecdotes=>  anecdotes.votes)
  let maxVote=Math.max.apply(null,data)
  let newarr=[]
  anecdotes.map(items => items.votes===maxVote && newarr.push([items.anecdote],[ items.votes]))
  
  return newarr
}
function handleVotes(){
  setmax(getMostVotes())
  let id= currentAnecdote.id
  setAnecdotes(items=> items.map(item =>{
    return item.id === id?
    {...item, votes:currentAnecdote.votes+1}:item
    
  })) 
}
function handleAnecdotes(){
  position===anecdotes.length-1? setPosition(0):setPosition(prev=> prev+1)
}
function handleAnecdotesprev(){
  position<1? setPosition(anecdotes.length-1):
  setPosition(prev=>prev-1)
  
}

console.log(max)
return (
  <div className='anecdotas'>
    <h1>Anecdote of the day</h1>
    <h3>{currentAnecdote.anecdote}</h3>
    <h5>{currentAnecdote.votes} votes</h5>
    <div>
   <button onClick={handleVotes}>Vote</button>
   <button onClick={handleAnecdotes}>Next anecdote</button>
   <button onClick={handleAnecdotesprev}>Previous</button>
   </div>
   <h1>Anecdote whit most votes</h1>
   <h5>{max[0]}</h5>
   <h5>votes: {max[1]}</h5>

 </div>
)
}

export default App;
