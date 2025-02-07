import React from 'react'
import { Link } from 'react-router-dom'

const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))

function AlphabetContent() {
  const speak = (letter) => {
    const utterance = new SpeechSynthesisUtterance(letter);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Alphabet</h2>
      <p className="text-gray-600 mb-4">Learn the English alphabet from A to Z.</p>
      <div className="grid grid-cols-7 gap-4">
        {letters.map((letter, index) => (
          <Link key={index} to={`/letter/${letter.toLowerCase()}`} className="text-center">
            <span className="text-2xl font-bold">{letter}</span>
            <br />
            <span className="text-gray-600">{letter.toLowerCase()}</span>
            <br />
            <button onClick={() => speak(letter)} className="ml-2">
              <img src="https://cdn-icons-png.flaticon.com/512/340/340683.png" alt="Speaker Icon" className="h-6 w-6" />
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AlphabetContent
