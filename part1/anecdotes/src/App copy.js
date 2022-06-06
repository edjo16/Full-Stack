import './App.css';
import { useState, useEffect} from 'react'
const App = () => {
 
const [selected, setSelected] = useState(0)
const [MaxPosition, setMaxPosition]=useState(0)
const anecdotes = 
[ 'If it hurts, do it more often',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Adding manpower to a late software project makes it later!',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
]
const [votes, setVotes]=useState([3,4,5,2,1,3,2])
console.log(votes)

function handleVotes(){
  setVotes(vote=>[...vote, vote[selected]+=1])
}
function handleAnecdotes(){
  selected===anecdotes.length-1? setSelected(0):setSelected(prev=> prev+1)
}

function handleAnecdotesprev(){
  selected<1? setSelected(anecdotes.length-1):
  setSelected(prev=> prev-1)
}
 useEffect(()=>{
   let maxVote=Math.max.apply(null,votes)
   if(maxVote>1){
     let position=0

     for(let i = 0; i  < votes.length; i++){
       if(votes[i] === maxVote){
         position=i
        }
      }
      setMaxPosition(position)
    }
 },[votes])

return (
  <div className='anecdotas'>
    <h1>Anecdote of the day</h1>
    {anecdotes[selected]}
    <h4> {votes[selected]} votes</h4>
    <div>
    <button onClick={handleVotes}>vote</button>
    <button onClick={handleAnecdotes}>nex anecdote</button>
    <button onClick={handleAnecdotesprev}>previous</button>

    </div>
    <h1>Anecdote whit most votes</h1>
    {anecdotes[MaxPosition]}
  </div>
)
}

export default App;
