import React from 'react'
import { Link } from 'react-router-dom'

const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))

function AlphabetContent() {
  const speak = (letter) => {
    const utterance = new SpeechSynthesisUtterance(letter);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Alphabet</h2>
      <p className="text-gray-700 text-lg mb-4">Learn the English alphabet from A to Z.</p>
      <div className="grid grid-cols-5 gap-4">
        {letters.map((letter, index) => (
          <div key={index} className="text-center bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <Link to={`/letter/${letter.toLowerCase()}`} className="text-2xl font-bold text-purple-600">{letter}</Link>
            <br />
            <span className="text-gray-600">{letter.toLowerCase()}</span>
            <br />
            <button onClick={() => speak(letter)} className="mt-2">
              <img src="https://cdn-icons-png.flaticon.com/512/340/340683.png" alt="Speaker Icon" className="h-8 w-8" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AlphabetContent
