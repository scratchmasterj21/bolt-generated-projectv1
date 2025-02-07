import React from 'react'
import { Link } from 'react-router-dom'

const lessons = [
  { id: 1, title: 'Alphabet', description: 'Learn the English alphabet from A to Z.' },
  { id: 2, title: 'Numbers', description: 'Learn to count from 1 to 10.' },
  { id: 3, title: 'Colors', description: 'Learn basic colors.' },
  { id: 4, title: 'Animals', description: 'Learn common animal names.' },
  { id: 5, title: 'Family', description: 'Learn common family members.' },
  { id: 6, title: 'Weather', description: 'Learn common weather terms.' },
  { id: 7, title: 'Body Parts', description: 'Learn common body parts.' }
]

function LessonRoadmap() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">Lesson Roadmap</h1>
      <div className="space-y-8">
        {lessons.map(lesson => (
          <div key={lesson.id} className="bg-white p-4 rounded-lg shadow-md">
            <Link to={`/lesson/${lesson.id}`} className="text-xl font-semibold mb-2 block">{lesson.title}</Link>
            <p className="text-gray-600">{lesson.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LessonRoadmap
