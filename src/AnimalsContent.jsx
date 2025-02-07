import React from 'react'

const animals = ['Cat', 'Dog', 'Elephant', 'Giraffe', 'Lion', 'Monkey', 'Penguin', 'Rabbit', 'Tiger']

function AnimalsContent() {
  const speak = (animal) => {
    const utterance = new SpeechSynthesisUtterance(animal);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Animals</h2>
      <p className="text-gray-700 text-lg mb-4">Learn common animal names.</p>
      <div className="grid grid-cols-3 gap-4">
        {animals.map((animal, index) => (
          <div key={index} className="text-center bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600">{animal[0]}</span>
            </div>
            <span className="text-gray-600">{animal}</span>
            <br />
            <button onClick={() => speak(animal)} className="mt-2">
              <img src="https://cdn-icons-png.flaticon.com/512/340/340683.png" alt="Speaker Icon" className="h-8 w-8" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimalsContent
