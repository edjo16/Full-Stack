
import { useState , useEffect} from "react"

const Wheater=({capital})=>{
    const [data, setData]=useState(null)

    useEffect(()=>{    
    const api_key = process.env.REACT_APP_API_KEY
   
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${api_key}`)
    .then(res=> res.json())
    .then(data=> setData(data))
},[capital])

    return( <>
      {capital && data &&
        <div>
        <h3>Temperature: {data.main.temp} celcius</h3>
        <h3>Wind: {data.wind.speed} m/s</h3>
        </div> 
        }
</>)
}

export default Wheater