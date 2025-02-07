import React from 'react'

const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Brown', 'Black', 'White']

function ColorsContent() {
  const speak = (color) => {
    const utterance = new SpeechSynthesisUtterance(color);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Colors</h2>
      <p className="text-gray-700 text-lg mb-4">Learn basic colors.</p>
      <div className="grid grid-cols-3 gap-4">
        {colors.map((color, index) => (
          <div key={index} className="text-center bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div
              className={`w-16 h-16 mx-auto rounded-full`}
              style={{
                backgroundColor: color.toLowerCase(),
                border: color.toLowerCase() === 'white' ? '1px solid black' : 'none'
              }}
            ></div>
            <span className="text-gray-600">{color}</span>
            <br />
            <button onClick={() => speak(color)} className="mt-2">
              <img src="https://cdn-icons-png.flaticon.com/512/340/340683.png" alt="Speaker Icon" className="h-8 w-8" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorsContent
