import React from 'react'
import { useParams } from 'react-router-dom'
import AlphabetContent from './AlphabetContent'
import NumbersContent from './NumbersContent'
import ColorsContent from './ColorsContent'
import AnimalsContent from './AnimalsContent'
import FamilyContent from './FamilyContent'
import WeatherContent from './WeatherContent'
import BodyPartsContent from './BodyPartsContent'

const lessons = [
  { id: 1, title: 'Alphabet', component: AlphabetContent },
  { id: 2, title: 'Numbers', component: NumbersContent },
  { id: 3, title: 'Colors', component: ColorsContent },
  { id: 4, title: 'Animals', component: AnimalsContent },
  { id: 5, title: 'Family', component: FamilyContent },
  { id: 6, title: 'Weather', component: WeatherContent },
  { id: 7, title: 'Body Parts', component: BodyPartsContent }
]

function LessonContent() {
  const { id } = useParams()
  const lesson = lessons.find(lesson => lesson.id === parseInt(id))

  if (!lesson) {
    return <div>Lesson not found</div>
  }

  const ContentComponent = lesson.component

  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <ContentComponent />
    </div>
  )
}

export default LessonContent
