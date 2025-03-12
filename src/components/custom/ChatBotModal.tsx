"use client"
import React, { useState, useEffect, useRef } from "react";
import { Bot, Send, Mic, Paperclip, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function ChatBotModal() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const predefinedMessages: string[] = [
    "Hello! How can I help you?",
    "What are your operating hours?",
    "How do I contact customer support?",
  ];

  useEffect(() => {
    // Initial bot message
    setMessages([
      {
        role: "assistant",
        content: "Hello! I'm your assistant. How can I help you today?",
      },
    ]);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const userMessage: Message = {
        role: "user",
        content: inputValue,
      };

      const botResponse: Message = {
        role: "assistant",
        content: "This is a dummy response. Integrate your actual bot logic here.",
      };

      setMessages([...messages, userMessage, botResponse]);
      setInputValue("");
    }
  };

  const handlePillClick = (message: string) => {
    const userMessage: Message = {
      role: "user",
      content: message,
    };

    const botResponse: Message = {
      role: "assistant",
      content: "This is a dummy response to your quick message.",
    };

    setMessages([...messages, userMessage, botResponse]);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const userMessage: Message = {
        role: "user",
        content: `Uploaded file: ${file.name}`,
      };
      setMessages([...messages, userMessage]);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="fixed bottom-4 right-4 p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 z-[9999]">
          <MessageCircle size={24} />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md p-0 z-[99999]">
        <DialogHeader className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 flex justify-center items-center rounded-full bg-blue-300">
              <Bot size={24} />
            </div>
            <DialogTitle>ChatBot Assistant</DialogTitle>
          </div>
        </DialogHeader>

        <div className="flex flex-col h-[70vh]">
          <ScrollArea className="flex-1 p-4">
            {messages.length === 0 ? (
              <p className="text-center text-gray-500">No messages yet.</p>
            ) : (
              <div className="flex flex-col space-y-2">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`max-w-[80%] p-3 text-sm rounded-lg shadow break-words ${msg.role === "user"
                      ? "bg-blue-600 text-white ml-auto"
                      : "bg-white text-black mr-auto border"
                      }`}
                  >
                    {msg.content}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="flex flex-wrap gap-1 mb-4">
              {predefinedMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => handlePillClick(msg)}
                  className="border border-blue-300 text-blue-600 text-xs px-4 py-2 rounded-full hover:bg-blue-50"
                >
                  {msg}
                </button>
              ))}
            </div>

            <form className="flex items-center gap-2" onSubmit={handleSubmit}>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileUpload}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="p-2 text-gray-600 hover:text-gray-800"
              >
                <Paperclip size={20} />
              </button>
              <button
                type="button"
                onClick={toggleRecording}
                className={`p-2 ${isRecording ? "text-red-500" : "text-gray-600 hover:text-gray-800"
                  }`}
              >
                <Mic size={20} />
              </button>
              <input
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                type="submit"
                className="p-2 text-blue-600 hover:text-blue-700"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ChatBotModal;
