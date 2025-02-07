import React from 'react'

const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Brown', 'Black', 'White']

function ColorsContent() {
  const speak = (color) => {
    const utterance = new SpeechSynthesisUtterance(color);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Colors</h2>
      <p className="text-gray-600 mb-4">Learn basic colors.</p>
      <div className="grid grid-cols-3 gap-4">
        {colors.map((color, index) => (
          <div key={index} className="text-center">
            <div
              className={`w-16 h-16 mx-auto rounded-full`}
              style={{
                backgroundColor: color.toLowerCase(),
                border: color.toLowerCase() === 'white' ? '1px solid black' : 'none'
              }}
            ></div>
            <span className="text-gray-600">{color}</span>
            <br />
            <button onClick={() => speak(color)} className="ml-2">
              <img src="https://cdn-icons-png.flaticon.com/512/340/340683.png" alt="Speaker Icon" className="h-6 w-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorsContent
