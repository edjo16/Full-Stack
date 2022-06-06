import {  useEffect, useState } from "react"
import Wheater from "./Wheater"
const Show =({data})=>{
    const arrayLang=[]
    data[0]?.languages && arrayLang.push(Object.values(data[0]?.languages))
    
    const capital=data[0]?.capital
    
    return(<div>
        <h1>Name: {data[0]?.name}</h1>
        <h2>Capital: {data[0]?.capital}</h2>
        <h2>Area: {data[0]?.area}</h2>
        <ul>Languages: {arrayLang[0]?.map(item => <li> {item} </li>)} </ul>
        <img width="200px"src={data[0]?.flag} alt="flag"></img>
        <h3>wheater of {capital}</h3>
       {capital && <Wheater capital={capital}/>}
    </div>)
}

export default function Country({change,show,list,data}){
    const [dataClick, setDataClick]=useState([])
    const [activated, setactivates]=useState(false)    
    useEffect(()=>{
        data.length === 0 && setDataClick([])
        data.length ===0 && setactivates(false)
        !show && setactivates(false)
    },[data, show])


    const handleclick=(e)=>{
        const name=data.filter(item=> item.name.toLocaleLowerCase()===e )
        setDataClick(name)
        setactivates(prev => prev=true)
        change()
    }
    return(
        <>
        {list.length === 0 && <h2>Hello, Write the name of the Country you're interested in</h2>}
        <div className="container">
        {list.length >10 && data.length >10? <h2>Too many matches, please enter another key</h2>
        :list.length >1 && list.length < 10?list.map( item => {return(
        <div  className="list">
            <h4>{item}</h4>
            <button onClick={()=>handleclick(item)}>show</button>
            </div>)})
        :list.length ===1  && 
        <Show  data={data}/> 
        
    } 
    
    {activated && show  && <Show  data={dataClick}/>}
        </div>
        </>
    )
}

        