import React, { useState } from 'react'

function ConversationPractice() {
  const [input, setInput] = useState('')
  const [conversation, setConversation] = useState([])
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const apiKey = import.meta.env.VITE_OPENAI_API_KEY
    const apiUrl = 'https://api.openai.com/v1/chat/completions'

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are an English language tutor. Focus on helping the user practice conversational English. Keep your responses short and avoid writing essays or speeches.' },
          ...conversation,
          { role: 'user', content: input }
        ],
        max_tokens: 50
      })
    }

    try {
      const response = await fetch(apiUrl, requestOptions)
      const data = await response.json()
      const aiResponse = data.choices[0].message.content.trim()
      setConversation([...conversation, { role: 'user', content: input }, { role: 'assistant', content: aiResponse }])
      speak(aiResponse)
    } catch (error) {
      console.error('Error:', error)
      setConversation([...conversation, { role: 'user', content: input }, { role: 'assistant', content: 'An error occurred. Please try again.' }])
      speak('An error occurred. Please try again.')
    } finally {
      setLoading(false)
      setInput('')
    }
  }

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(utterance)
  }

  const repeatTTS = (text) => {
    speak(text)
  }

  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Conversation Practice</h2>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        {conversation.map((message, index) => (
          <div key={index} className={`flex ${message.role === 'user' ? 'justify-start' : 'justify-end'} mb-2`}>
            <p className={message.role === 'user' ? 'text-left text-gray-800 text-lg' : 'text-right text-purple-600 text-lg'}>
              {message.content}
            </p>
            <button onClick={() => repeatTTS(message.content)} className="ml-2">
              <img src="https://cdn-icons-png.flaticon.com/512/340/340683.png" alt="Speaker Icon" className="h-6 w-6" />
            </button>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type something..."
          className="p-2 border border-gray-300 rounded w-full mb-2 text-lg"
          disabled={loading}
        />
        <button type="submit" className="p-2 bg-purple-500 text-white rounded w-full text-lg" disabled={loading}>
          {loading ? 'Thinking...' : 'Send'}
        </button>
      </form>
    </div>
  )
}

export default ConversationPractice
