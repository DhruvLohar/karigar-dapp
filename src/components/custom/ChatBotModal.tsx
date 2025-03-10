import React, { useState, useEffect, useRef } from "react";
import { Bot, X, Send } from "lucide-react";

interface ChatBotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ChatBotModal({ isOpen, onClose }: ChatBotModalProps) {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const predefinedMessages: string[] = [
    "Hello! How can I help you?",
    "What are your operating hours?",
    "How do I contact customer support?",
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  const handlePillClick = (message: string) => {
    setMessages([...messages, message]);
  };

  return (
    <div
      className={`fixed overflow-y-hidden inset-0 bg-black bg-opacity-50 flex justify-end items-center lg:px-20 z-30 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
    >
      <div
        className={`bg-blue-100 h-[90vh] flex flex-col justify-between pb-2 rounded-t-lg w-full max-w-md transition-transform duration-300 ${isOpen ? "translate-y-0" : "translate-y-full"
          }`}
      >
        <div className="w-full h-16 p-5 rounded-lg flex justify-between items-center bg-white">
          <div className="h-10 flex justify-center items-center w-10 rounded-full bg-blue-300">
            <Bot size={24} />
          </div>
          <div>
            <h2 className="text-black text-xl">ChatBot</h2>
          </div>
          <div
            className="h-10 flex text-black justify-center items-center w-10 rounded-full cursor-pointer"
            onClick={onClose}
          >
            <X />
          </div>
        </div>

        <div
          className="flex-1 overflow-y-auto p-4"
          style={{
            scrollbarWidth: 'thin', /* For Firefox */
            scrollbarColor: '#888 #f1f1f1', /* For Firefox */
          }}
        >
          {messages.length === 0 ? (
            <p className="text-center text-gray-500">No messages yet.</p>
          ) : (
            <div className="flex flex-col items-end space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className="bg-blue-600 max-w-[80%] p-3 text-sm rounded-lg shadow text-white break-words"
                >
                  {msg}
                </div>
              ))}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <div className="w-full p-4 flex flex-wrap gap-1">
          {predefinedMessages.map((msg, index) => (
            <button
              key={index}
              onClick={() => handlePillClick(msg)}
              className=" border-blue-300 text-blue-300 bg-white text-xs px-4 py-2 rounded-full"
            >
              {msg}
            </button>
          ))}
        </div>

        <div className="w-full h-12 flex items-center px-4 justify-center">
          <form className="w-full h-full flex rounded-lg items-center" onSubmit={handleSubmit}>
            <input
              className="input text-black rounded-full px-5 bg-white h-full w-full focus:outline-none focus:ring-0"
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="h-full w-11 flex justify-center items-center"
            >
              <Send />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatBotModal;
