import { useState } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today? 😊" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { from: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: "I'm thinking..." }]);
    }, 800);
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-xl transition-all ${
          open ? "scale-0" : "scale-100"
        }`}
      >
        <FiMessageCircle size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-80 md:w-96 bg-[#0f0f17] rounded-2xl shadow-2xl overflow-hidden border border-gray-700 transition-all ${
          open ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-4"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-white">Chat Assist</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-white transition"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="h-80 overflow-y-auto p-4 space-y-3 bg-[#0f0f17]">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[80%] p-3 rounded-xl text-sm ${
                msg.from === "bot"
                  ? "bg-blue-600 text-white self-start rounded-bl-none"
                  : "bg-gray-800 text-white ml-auto rounded-br-none"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 border-t border-gray-700 flex gap-2">
          <input
            type="text"
            className="flex-1 px-3 py-2 bg-gray-900 text-white rounded-lg outline-none border border-gray-700 focus:border-blue-500"
            placeholder="Ask me anything…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
