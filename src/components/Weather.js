const Weather = ({ weather }) => {
  return (
    <div className="md:w-96  h-3/4 mx-auto bg-white p-4 shadow-md rounded">
      {(typeof weather.main != "undefined") ? (
        <div className={`${(weather.main.temp > 16) ? 'bg-warm ' : 'bg-cold'} h-full bg-cover bg-right p-6 text-white text-center`}>
          <div className="backdrop-blur-sm">
            <h1 className="font-medium text-4xl">{weather.name}, {weather.sys.country}</h1>
            <h2 className="font-light text-2xl italic">{new Date().toDateString()}</h2>
          </div>
          <div className="weather-box">
            <h3 className="backdrop-brightness-50 bg-white/30 text-5xl font-bold rounded-lg w-fit p-7 mx-auto my-5 md:my-10">
              {Math.round(weather.main.temp)}°C
              <div className="flex items-center justify-center mx-auto flex-row-reverse">
                <p className="text-xl font-semibold">{weather.weather[0].main}</p>
                <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="icon" />
              </div>
            </h3>
          </div>
        </div>
      ) : (
      <div className="bg-default bg-cover bg-center h-full">
        <h1 className="m-auto text-4xl md:text-6xl backdrop-brightness-50 bg-white/30 w-full h-full text-white font-extrabold text-center flex justify-center items-center p-5" >
          Search for a city
        </h1>
      </div>
      )}
    </div>
  )
}

export default Weather;