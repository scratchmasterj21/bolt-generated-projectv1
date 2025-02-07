import React from 'react'

const greetings = ['Hello', 'Goodbye', 'Good morning', 'Good afternoon', 'Good evening', 'Good night']

function BasicGreetingsContent() {
  const speak = (greeting) => {
    const utterance = new SpeechSynthesisUtterance(greeting);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Basic Greetings</h2>
      <p className="text-gray-700 text-lg mb-4">Learn basic greetings.</p>
      <div className="grid grid-cols-2 gap-6">
        {greetings.map((greeting, index) => (
          <div key={index} className="text-center bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <span className="text-2xl font-semibold text-purple-600">{greeting}</span>
            <br />
            <button onClick={() => speak(greeting)} className="mt-2">
              <img src="https://cdn-icons-png.flaticon.com/512/340/340683.png" alt="Speaker Icon" className="h-8 w-8" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BasicGreetingsContent
