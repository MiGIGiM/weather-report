import Weather from './components/Weather';
import { useState } from 'react';
const api = {
  key: 'a746ba54cd02b775a998fe8a51f4fb23',
  base: 'https://api.openweathermap.org/data/2.5/'
}
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const getWeather = evt => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-5">
      <div className="flex items-center p-2 space-x-2 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 h-fit md:w-fit mx-auto mb-5">
        <form
          className="flex bg-gray-200 p-4 w-72 space-x-4 rounded-lg"
          onSubmit={(e) => {
            e.preventDefault();
            getWeather();
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            className="bg-gray-200 outline-none" type="text"
            placeholder="Location..."
            value={query}
            onChange={e => setQuery(e.target.value)}/>
        </form>
        <button className="bg-indigo-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer hidden md:block" onClick={getWeather}>
          <span>Search</span>
        </button>
      </div>
      <Weather weather={weather} />
    </div>
  );
}

export default App;
