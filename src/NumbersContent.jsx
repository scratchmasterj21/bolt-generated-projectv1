import React, { useRef, useEffect } from 'react'

const numbers = Array.from({ length: 10 }, (_, i) => i + 1)

function NumbersContent() {
  const speak = (number) => {
    const utterance = new SpeechSynthesisUtterance(number.toString());
    window.speechSynthesis.speak(utterance);
  }

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

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Numbers</h2>
      <p className="text-gray-600 mb-4">Learn to count from 1 to 10.</p>
      <div className="grid grid-cols-5 gap-4">
        {numbers.map((number, index) => (
          <div key={index} className="text-center">
            <span className="text-2xl font-bold">{number}</span>
            <br />
            <button onClick={() => speak(number)} className="ml-2">
              <img src="https://cdn-icons-png.flaticon.com/512/340/340683.png" alt="Speaker Icon" className="h-6 w-6" />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-gray-600 mb-2">Practice writing the number:</p>
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
        <button onClick={clearCanvas} className="bg-red-500 text-white px-4 py-2 rounded">Erase</button>
      </div>
    </div>
  )
}

export default NumbersContent
