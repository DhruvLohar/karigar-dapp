"use client"
import React, { useState, useEffect, useRef } from "react";
import { Bot, Send, Mic, Paperclip, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

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
        <Button className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-dori/10 hover:border-dori/40 hover:shadow-md transition-all w-full h-full">
          <div className="p-3 mb-2 rounded-full bg-dori/10 text-dori">
            <MessageCircle />
          </div>
          <span className="font-medium text-center">Chat with AI</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chat with AI Assistant</DialogTitle>
          <DialogDescription>
            Ask me any questions about your artisan business, products, or marketing strategies.
          </DialogDescription>
        </DialogHeader>
        <div className="border rounded-md p-4 h-80 overflow-y-auto bg-gray-50">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 mt-24">
              Start a conversation with the AI assistant
            </div>
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
        </div>
        <div className="flex mt-4">
          <input
            className="flex-1 rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-dori"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button className="rounded-l-none">Send</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ChatBotModal;
