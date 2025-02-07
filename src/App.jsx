import { Routes, Route, Link } from "react-router-dom";
import { LessonRoadmap, Vocabulary } from "./LessonRoadmap.jsx";
import ConversationPractice from "./ConversationPractice.jsx";
import LessonContent from "./LessonContent.jsx";
import LetterContent from "./LetterContent.jsx";
import React from 'react'
import ColorsContent from "./ColorsContent.jsx";
import AnimalsContent from "./AnimalsContent.jsx";
import FamilyContent from "./FamilyContent.jsx";
import WeatherContent from "./WeatherContent.jsx";
import BodyPartsContent from "./BodyPartsContent.jsx";

function App() {
  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded-lg">
      <nav className="flex justify-between items-center bg-blue-500 p-4 rounded-lg mb-4">
        <h1 className="text-2xl font-bold text-white">English Language App</h1>
        <div>
          <Link to="/" className="text-white mr-4">Lesson Roadmap</Link>
          <Link to="/practice" className="text-white">Conversation Practice</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<LessonRoadmap />} />
        <Route path="/practice" element={<ConversationPractice />} />
        <Route path="/lesson/:id" element={<LessonContent />} />
        <Route path="/letter/:letter" element={<LetterContent />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/vocabulary/4" element={<ColorsContent />} />
        <Route path="/vocabulary/5" element={<AnimalsContent />} />
        <Route path="/vocabulary/6" element={<FamilyContent />} />
        <Route path="/vocabulary/7" element={<WeatherContent />} />
        <Route path="/vocabulary/8" element={<BodyPartsContent />} />
      </Routes>
    </div>
  );
}

export default App;
