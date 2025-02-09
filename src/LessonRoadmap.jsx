import React from 'react'
import { Link } from 'react-router-dom'

const lessons = [
  { id: 1, title: 'Alphabet', description: 'Learn the English alphabet from A to Z.' },
  { id: 2, title: 'Numbers', description: 'Learn to count from 1 to 10.' },
  { id: 3, title: 'Vocabulary', description: 'Learn common words and phrases.' },
  { id: 9, title: 'Basic Greetings', description: 'Learn basic greetings.' }
]

const vocabularyLessons = [
  { id: 4, title: 'Colors', description: 'Learn basic colors.' },
  { id: 5, title: 'Animals', description: 'Learn common animal names.' },
  { id: 6, title: 'Family', description: 'Learn common family members.' },
  { id: 7, title: 'Weather', description: 'Learn common weather terms.' },
  { id: 8, title: 'Body Parts', description: 'Learn common body parts.' }
]

function LessonRoadmap() {
  return (
    <div className="p-4 bg-yellow-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-purple-600 text-center mb-4">Lessons</h1>
      <div className="space-y-8">
        {lessons.map(lesson => (
          <div key={lesson.id} className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <Link to={lesson.id === 3 ? '/vocabulary' : `/lesson/${lesson.id}`} className="text-2xl font-semibold text-purple-600 mb-2 block">{lesson.title}</Link>
            <p className="text-gray-700 text-lg">{lesson.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Vocabulary() {
  return (
    <div className="p-4 bg-yellow-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-purple-600 text-center mb-4">Vocabulary</h2>
      <div className="space-y-8">
        {vocabularyLessons.map(lesson => (
          <div key={lesson.id} className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <Link to={`/vocabulary/${lesson.id}`} className="text-2xl font-semibold text-purple-600 mb-2 block">{lesson.title}</Link>
            <p className="text-gray-700 text-lg">{lesson.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export { LessonRoadmap, Vocabulary }
