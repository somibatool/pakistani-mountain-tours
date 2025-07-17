import React, { useState } from 'react';
import { FiMessageSquare } from 'react-icons/fi';  // Message Icon

const ChatButton = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(["Hi! 👋 How can I help you?"]);

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([...messages, input, "Thank you for your message! We'll get back to you shortly."]);
    setInput('');
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 animate-bounce"
      >
        <FiMessageSquare size={24} />
      </button>

      {/* Chat Modal */}
      {open && (
        <div className="fixed bottom-20 right-6 bg-white shadow-xl border rounded-lg w-80 max-h-96 flex flex-col z-50">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg font-bold">
            Support Chat
          </div>

          {/* Message Area */}
          <div className="flex-1 p-4 space-y-2 overflow-y-auto text-sm text-gray-700">
            {messages.map((msg, idx) => (
              <div key={idx} className="bg-gray-200 rounded p-2">{msg}</div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded px-2 py-1 text-sm mr-2"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatButton;
