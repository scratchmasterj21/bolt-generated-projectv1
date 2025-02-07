import React from 'react'
import { Link } from 'react-router-dom'

const bodyParts = ['Head', 'Shoulders', 'Knees', 'Toes', 'Eyes', 'Ears', 'Mouth', 'Nose']

function BodyPartsContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Body Parts</h2>
      <p className="text-gray-600 mb-4">Learn common body parts.</p>
      <div className="grid grid-cols-3 gap-4">
        {bodyParts.map((part, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600">{part[0]}</span>
            </div>
            <span className="text-gray-600">{part}</span>
            <br />
            <button onClick={() => speak(part)} className="ml-2">
              <img src="https://cdn-icons-png.flaticon.com/512/340/340683.png" alt="Speaker Icon" className="h-6 w-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BodyPartsContent
