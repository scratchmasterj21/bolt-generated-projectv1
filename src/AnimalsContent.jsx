import React from 'react'

const animals = ['Cat', 'Dog', 'Elephant', 'Giraffe', 'Lion', 'Monkey', 'Penguin', 'Rabbit', 'Tiger']

function AnimalsContent() {
  const speak = (animal) => {
    const utterance = new SpeechSynthesisUtterance(animal);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Animals</h2>
      <p className="text-gray-600 mb-4">Learn common animal names.</p>
      <div className="grid grid-cols-3 gap-4">
        {animals.map((animal, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600">{animal[0]}</span>
            </div>
            <span className="text-gray-600">{animal}</span>
            <br />
            <button onClick={() => speak(animal)} className="ml-2">
              <img src="https://cdn-icons-png.flaticon.com/512/340/340683.png" alt="Speaker Icon" className="h-6 w-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimalsContent
