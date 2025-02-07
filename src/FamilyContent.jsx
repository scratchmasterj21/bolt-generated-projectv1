import React from 'react'

const family = ['Mother', 'Father', 'Brother', 'Sister', 'Grandmother', 'Grandfather', 'Uncle', 'Aunt', 'Cousin']

function FamilyContent() {
  const speak = (member) => {
    const utterance = new SpeechSynthesisUtterance(member);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Family</h2>
      <p className="text-gray-600 mb-4">Learn common family members.</p>
      <div className="grid grid-cols-3 gap-4">
        {family.map((member, index) => (
          <div key={index} className="text-center">
            <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600">{member[0]}</span>
            </div>
            <span className="text-gray-600">{member}</span>
            <br />
            <button onClick={() => speak(member)} className="ml-2">
              <img src="https://cdn-icons-png.flaticon.com/512/340/340683.png" alt="Speaker Icon" className="h-6 w-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FamilyContent
