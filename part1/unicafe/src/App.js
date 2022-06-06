import './App.css';
import React,{useState} from 'react';

const Statistics = (props) => {

  const all=props.good + props.neutral +props.bad
  const average=((props.good - props.bad)/all).toFixed(2)
  const positive=(props.good /all*100).toFixed(1)
  return(
    <table className='container-table'>
      <tbody>

      <tr>
        <td>Good</td>
        <td>{props.good}</td>
      </tr>
      <tr>
        <td>Neutral</td>
        <td>{props.neutral}</td>
      </tr>
      <tr>
        <td>Bad</td>
        <td>{props.bad}</td>
      </tr>
      <tr>
        <td>All</td>
        <td>{all}</td>
      </tr>
      <tr>
        <td>average</td>
        <td>{average==="NaN"? 0:average }</td>
      </tr>
      <tr>
        <td>positive</td>
        <td className={props.positive? "positive" :"negative"}>{positive==="NaN"? 0:positive }%</td>
      </tr>
      </tbody>
    </table>
  )
}
const Button=(props)=><button className={props.value} value={props.value} onClick={props.handleFeedback}>{props.value}</button>

const App = () => {

  const [feedBack, setfeedBack] = useState({
    good:0,
    neutral:0,
    bad:0
  })
function handleFeedback(e){
  const value= e.target.value
  setfeedBack(prev=>({
    ...prev,
    [value]:feedBack[value]+1
  }))
}
 
const positive= feedBack.good>feedBack.bad
  return (
    <div className='container-Feedback'>
      <h1>Give feedBack</h1>
      <Button  value={"good"} handleFeedback={handleFeedback}/>
      <Button  value={"neutral"} handleFeedback={handleFeedback}/>
      <Button  value={"bad"} handleFeedback={handleFeedback}/>

      <h2>Statistics</h2>

    <Statistics good={feedBack.good}
                neutral={feedBack.neutral}
                bad={feedBack.bad}
                positive={positive}/>
    </div> 
    )
}

export default App;
