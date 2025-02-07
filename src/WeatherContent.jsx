import React from 'react'

const weather = ['Sunny', 'Rainy', 'Cloudy', 'Snowy', 'Windy', 'Stormy', 'Foggy', 'Hot', 'Cold']

function WeatherContent() {
  const speak = (term) => {
    const utterance = new SpeechSynthesisUtterance(term);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Weather</h2>
      <p className="text-gray-700 text-lg mb-4">Learn common weather terms.</p>
      <div className="grid grid-cols-3 gap-4">
        {weather.map((term, index) => (
          <div key={index} className="text-center bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600">{term[0]}</span>
            </div>
            <span className="text-gray-600">{term}</span>
            <br />
            <button onClick={() => speak(term)} className="mt-2">
              <img src="https://cdn-icons-png.flaticon.com/512/340/340683.png" alt="Speaker Icon" className="h-8 w-8" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeatherContent
