import React, { useState } from 'react'

const WheaterCard = ({ weather, temperature }) => {
  const [iscelcius, setiscelcius] = useState(true)

  const changuetemperature = () => {
    setiscelcius(!iscelcius);
  }

  return (
    <article className='Card'>
      <h1 className='card__title'>wheater app</h1>
      <h2 className='card__subtitle'>{`${weather?.name} , ${weather?.sys.country}`}</h2>
      <section className='card__first-section'>
        <img className='card__icon' src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />

      </section>
      <section className='card__second-section'>
        <h3 className='second__title'>'{weather?.weather[0].description}'</h3>
        <ul className='second__list'>
          <li className='second__item'><spam className="second__span">wind speed:</spam> {weather?.wind.speed} m/s </li>
          <li className='second__item'><spam className="second__span">clouds:</spam> {weather?.clouds.all} % </li>
          <li className='second__item'><spam className="second__span">pressure:</spam> {weather?.main.pressure} Hpa</li>
        </ul>
      </section>
      <h2 className='card__temperature'>{iscelcius ? `${temperature?.celsius} °C` : `${temperature?.farenheit} °F `}</h2>
      <button className='card__btn' onClick={changuetemperature}>{iscelcius ? 'change to °F' : 'changue tu °C'}</button>

    </article>
  )
}

export default WheaterCard