import React from 'react'

const greetings = ['Hello', 'Goodbye', 'Good morning', 'Good afternoon', 'Good evening', 'Good night']

function BasicGreetingsContent() {
  const speak = (greeting) => {
    const utterance = new SpeechSynthesisUtterance(greeting);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Basic Greetings</h2>
      <p className="text-gray-600 mb-4">Learn basic greetings.</p>
      <div className="grid grid-cols-3 gap-4">
        {greetings.map((greeting, index) => (
          <div key={index} className="text-center">
            <span className="text-gray-600">{greeting}</span>
            <br />
            <button onClick={() => speak(greeting)} className="ml-2">
              <img src="https://cdn-icons-png.flaticon.com/512/340/340683.png" alt="Speaker Icon" className="h-6 w-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BasicGreetingsContent
