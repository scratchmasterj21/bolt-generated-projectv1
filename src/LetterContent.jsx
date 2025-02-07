import React, { useRef, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))

const letterImages = {
  A: 'https://soundenglish.org/wp-content/uploads/2021/05/Aa-1024x386.png',
  a: 'https://soundenglish.org/wp-content/uploads/2021/05/Aa-1024x386.png',
  B: 'https://soundenglish.org/wp-content/uploads/2021/05/Bb-1024x385.png',
  b: 'https://soundenglish.org/wp-content/uploads/2021/05/Bb-1024x385.png',
  C: 'https://soundenglish.org/wp-content/uploads/2021/05/Cc-1024x386.png',
  c: 'https://soundenglish.org/wp-content/uploads/2021/05/Cc-1024x386.png',
  D: 'https://soundenglish.org/wp-content/uploads/2021/05/Dd-1024x385.png',
  d: 'https://soundenglish.org/wp-content/uploads/2021/05/Dd-1024x385.png',
  E: 'https://soundenglish.org/wp-content/uploads/2021/05/Ee-1024x386.png',
  e: 'https://soundenglish.org/wp-content/uploads/2021/05/Ee-1024x386.png',
  F: 'https://soundenglish.org/wp-content/uploads/2021/05/Ff-1024x385.png',
  f: 'https://soundenglish.org/wp-content/uploads/2021/05/Ff-1024x385.png',
  G: 'https://soundenglish.org/wp-content/uploads/2021/05/Gg-1024x418.png',
  g: 'https://soundenglish.org/wp-content/uploads/2021/05/Gg-1024x418.png',
  H: 'https://soundenglish.org/wp-content/uploads/2021/05/Hh-1024x385.png',
  h: 'https://soundenglish.org/wp-content/uploads/2021/05/Hh-1024x385.png',
  I: 'https://soundenglish.org/wp-content/uploads/2021/05/Ii-1024x386.png',
  i: 'https://soundenglish.org/wp-content/uploads/2021/05/Ii-1024x386.png',
  J: 'https://soundenglish.org/wp-content/uploads/2021/05/Jj-1024x421.png',
  j: 'https://soundenglish.org/wp-content/uploads/2021/05/Jj-1024x421.png',
  K: 'https://soundenglish.org/wp-content/uploads/2021/05/Kk-1024x386.png',
  k: 'https://soundenglish.org/wp-content/uploads/2021/05/Kk-1024x386.png',
  L: 'https://soundenglish.org/wp-content/uploads/2021/05/Ll-1024x385.png',
  l: 'https://soundenglish.org/wp-content/uploads/2021/05/Ll-1024x385.png',
  M: 'https://soundenglish.org/wp-content/uploads/2021/05/Mm-1024x386.png',
  m: 'https://soundenglish.org/wp-content/uploads/2021/05/Mm-1024x386.png',
  N: 'https://soundenglish.org/wp-content/uploads/2021/05/Nn-1024x385.png',
  n: 'https://soundenglish.org/wp-content/uploads/2021/05/Nn-1024x385.png',
  O: 'https://soundenglish.org/wp-content/uploads/2021/05/Oo-1024x386.png',
  o: 'https://soundenglish.org/wp-content/uploads/2021/05/Oo-1024x386.png',
  P: 'https://soundenglish.org/wp-content/uploads/2021/05/Pp-1024x421.png',
  p: 'https://soundenglish.org/wp-content/uploads/2021/05/Pp-1024x421.png',
  Q: 'https://soundenglish.org/wp-content/uploads/2021/05/Qq-1024x418.png',
  q: 'https://soundenglish.org/wp-content/uploads/2021/05/Qq-1024x418.png',
  R: 'https://soundenglish.org/wp-content/uploads/2021/05/Rr-1024x385.png',
  r: 'https://soundenglish.org/wp-content/uploads/2021/05/Rr-1024x385.png',
  S: 'https://soundenglish.org/wp-content/uploads/2021/05/Ss-1024x386.png',
  s: 'https://soundenglish.org/wp-content/uploads/2021/05/Ss-1024x386.png',
  T: 'https://soundenglish.org/wp-content/uploads/2021/05/Tt-1024x385.png',
  t: 'https://soundenglish.org/wp-content/uploads/2021/05/Tt-1024x385.png',
  U: 'https://soundenglish.org/wp-content/uploads/2021/05/Uu-1024x386.png',
  u: 'https://soundenglish.org/wp-content/uploads/2021/05/Uu-1024x386.png',
  V: 'https://soundenglish.org/wp-content/uploads/2021/05/Vv-1024x385.png',
  v: 'https://soundenglish.org/wp-content/uploads/2021/05/Vv-1024x385.png',
  W: 'https://soundenglish.org/wp-content/uploads/2021/05/Ww-1024x386.png',
  w: 'https://soundenglish.org/wp-content/uploads/2021/05/Ww-1024x386.png',
  X: 'https://soundenglish.org/wp-content/uploads/2021/05/Xx-1024x385.png',
  x: 'https://soundenglish.org/wp-content/uploads/2021/05/Xx-1024x385.png',
  Y: 'https://soundenglish.org/wp-content/uploads/2021/05/Yy-1024x423.png',
  y: 'https://soundenglish.org/wp-content/uploads/2021/05/Yy-1024x423.png',
  Z: 'https://soundenglish.org/wp-content/uploads/2021/05/Zz-1024x385.png',
  z: 'https://soundenglish.org/wp-content/uploads/2021/05/Zz-1024x385.png'
}

function LetterContent() {
  const { letter } = useParams()
  const navigate = useNavigate()
  const upperCaseLetter = letter.toUpperCase()
  const lowerCaseLetter = letter.toLowerCase()
  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isDrawing, setIsDrawing] = React.useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.lineCap = 'round'
    context.lineWidth = 5
    contextRef.current = context

    // Draw three horizontal lines
    const lineSpacing = 60
    const lineCount = 3
    for (let i = 1; i <= lineCount; i++) {
      context.beginPath()
      context.moveTo(0, i * lineSpacing)
      context.lineTo(canvas.width, i * lineSpacing)
      context.strokeStyle = 'black' // Change line color to black
      context.stroke()
    }
  }, [])

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    contextRef.current.strokeStyle = 'red' // Change brush color to red
    setIsDrawing(true)
  }

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return
    }
    const { offsetX, offsetY } = nativeEvent
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  const stopDrawing = () => {
    contextRef.current.closePath()
    setIsDrawing(false)
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height)

    // Redraw three horizontal lines
    const lineSpacing = 60
    const lineCount = 3
    for (let i = 1; i <= lineCount; i++) {
      context.beginPath()
      context.moveTo(0, i * lineSpacing)
      context.lineTo(canvas.width, i * lineSpacing)
      context.strokeStyle = 'black' // Change line color to black
      context.stroke()
    }
  }

  const getImageUrl = (letter) => {
    return letterImages[letter] || `https://via.placeholder.com/200x200?text=Stroke+Order+for+${letter}`
  }

  const navigateToLetter = (direction) => {
    clearCanvas()
    const currentIndex = letters.indexOf(upperCaseLetter)
    let newIndex = currentIndex + direction
    if (newIndex < 0) newIndex = letters.length - 1
    if (newIndex >= letters.length) newIndex = 0
    navigate(`/letter/${letters[newIndex].toLowerCase()}`)
  }

  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold text-purple-600 mb-4">{upperCaseLetter}</h2>
      <p className="text-gray-700 text-lg mb-4">How to write the letter {upperCaseLetter} / {lowerCaseLetter}:</p>
      <div className="flex justify-center mb-4">
        <img src={getImageUrl(upperCaseLetter)} alt={`Stroke order for ${upperCaseLetter} / ${lowerCaseLetter}`} className="w-full max-w-xs" />
      </div>
      <div className="mt-4">
        <p className="text-gray-700 text-lg mb-2">Practice writing the letter:</p>
        <div className="flex justify-center mb-4">
          <canvas
            ref={canvasRef}
            width={400}
            height={200}
            className="border border-gray-300"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          />
        </div>
        <button onClick={clearCanvas} className="bg-red-500 text-white px-4 py-2 rounded text-lg mx-auto block">Erase</button>
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={() => navigateToLetter(-1)} className="bg-blue-500 text-white px-4 py-2 rounded text-lg">Previous</button>
        <button onClick={() => navigateToLetter(1)} className="bg-blue-500 text-white px-4 py-2 rounded text-lg">Next</button>
      </div>
    </div>
  )
}

export default LetterContent
