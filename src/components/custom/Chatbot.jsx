import { useState } from 'react'
import HelloTiger from '@/assets/images/hello-tiger-faq.webp'
import { IoMdSend } from 'react-icons/io'


// TBD; Replace response, replace Mascot with new one



export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Hello! How can I help you today?' },
  ])
  const [input, setInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { from: 'user', text: input }])
    setInput('')
    // Fake AI response after 1s (replace with real API)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: 'ai', text: `AI Response to: "${input}"` },
      ])
    }, 1000)
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[#369fff] to-[#12dc9f] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#33353B]"
        >
           <img
                src={HelloTiger}
                alt="AI"
                className="w-8 h-8 flex-shrink-0 rounded-full"
            />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="w-[320px] h-[400px] bg-[#2A2C33] text-white rounded-xl shadow-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center p-3 bg-[#2A2C33]">
            <h2 className="font-bold pl-2">Chat</h2>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-2 ${
                  msg.from === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.from === 'ai' && (
                  <img
                    src={HelloTiger}
                    alt="AI"
                    className=" w-8 h-8 flex-shrink-0 rounded-full"
                  />
                )}
                <div
                  className={`px-3 py-2 rounded-lg max-w-[70%] break-words ${
                    msg.from === 'user'
                      ? 'bg-gradient-to-r from-[#369fff] to-[#12dc9f] text-white'
                      : 'bg-[#2E3038] text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex p-3 gap-2 bg-[#2A2C33]">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything"
              className="flex-1 px-3 py-2 rounded-full bg-[#22242B] text-white outline-none text-sm"
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="p-2 pl-3 rounded-full bg-gradient-to-r from-[#369fff] to-[#12dc9f] text-white hover:scale-110 transition-all"
            >
              <IoMdSend size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
