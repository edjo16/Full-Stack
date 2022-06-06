import './App.css';
import React,{useState, useEffect} from "react"
import axios from "axios"
import Country from "./country"

function App() {
const [countries, setCountries]= useState([])
const [search, setSearch]= useState("")
const [list, setList]=useState([])
const [data, setData]=useState([])
const [showData, setShowData]=useState(false)
const db=countries.map(country=> (country.name.common).toLocaleLowerCase())

useEffect(()=>{
  axios.get("https://restcountries.com/v3.1/all")
  .then(res=>{
    const data= res.data
    setCountries(data)
  })
},[])

function handleSearch(e){
  e.preventDefault()
let value= e.target.value
  const countriesList=[]
  db.map(country=> country.startsWith(value) && countriesList.push(country))
  setList(countriesList)
  setSearch(value)
  setData(getdata(value))
  setShowData(prev=> prev===false)
 
  if (value.length < search.length){
   setShowData(false)
    setData([])
    setData(getdata(value))
}
}
function changeShow(){
  setShowData(true)
}
// function searching(){
//   const countriesList=[]
//   db.map(country=> country.startsWith(search) && countriesList.push(country))
//   setList(countriesList)
// }

function getdata(e){
  let newArray=[]
  countries.map(country => (country.name.common).toLocaleLowerCase().startsWith(e) && 
  newArray.push({name:country.name.common,capital:country.capital,area: country.area,languages:country.languages,flag:country.flags.svg}))
  return newArray
}


return (
    <div className="App">
      <label>Find Countries: </label>
      <input onChange={handleSearch} value={search}></input>
      <Country key={data.name} change={changeShow} show={showData} list={list}  data={data}/>
    </div>
  );
}

export default App;
