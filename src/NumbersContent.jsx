import React from 'react'
import { Link } from 'react-router-dom'

const numbers = Array.from({ length: 10 }, (_, i) => i + 1)

function NumbersContent() {
  const speak = (number) => {
    const utterance = new SpeechSynthesisUtterance(number.toString());
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Numbers</h2>
      <p className="text-gray-600 mb-4">Learn to count from 1 to 10.</p>
      <div className="grid grid-cols-5 gap-4">
        {numbers.map((number, index) => (
          <Link key={index} to={`/letter/${number}`} className="text-center">
            <span className="text-2xl font-bold">{number}</span>
            <br />
            <button onClick={() => speak(number)} className="ml-2">
              <img src="https://cdn-icons-png.flaticon.com/512/340/340683.png" alt="Speaker Icon" className="h-6 w-6" />
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NumbersContent
