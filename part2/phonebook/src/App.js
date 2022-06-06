import './App.css';
import axios from "axios"
import React,{useState,useEffect} from "react"

function App() {
const [persons, setPersons]= useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/persons")
    .then(res => {
    const name = res.data
    setPersons(name)
  })
},[])
console.log(persons)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
