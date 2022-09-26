import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import WheaterCard from './components/WheaterCard'
import Loading from './components/Loading'


function App() {
  const [coords, setcoords] = useState()
  const [weather, setweather] = useState()
  const [temperature, settemperature] = useState()
 

  useEffect(()=>{
    const sucess = (pos) => {
      const obj = {
        lat: pos.coords.latitude,
        lon:pos.coords.longitude
      }
        setcoords(obj)
     }
  
    navigator.geolocation.getCurrentPosition(sucess);
    
  },[])
  //console.log(coords)
  
//---------------------------------peticion del clima------------------------------

useEffect(()=>{
if (coords){
  const apikey = `8f1b8fa781d5bed175b905f924fb5cd8`;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apikey}`
  axios.get(url)
  .then(res=>{
    const celsius = (res.data.main.temp -273.15).toFixed(1)
    const farenheit = (celsius * 9/5 +32).toFixed(1)
    settemperature({celsius,farenheit})
    setweather(res.data)})
  .catch(err => console.log(err))

}


},[coords])

console.log(weather);


  return (
    <div className="App">

      {
        weather ?
     <WheaterCard  weather={weather}  temperature={temperature}/>
          :
          <Loading/>

      }
    </div>
  )
}

export default App
