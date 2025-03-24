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
import Link from "next/link";

interface Message {
  role: "user" | "assistant";
  content: string;
  buttons?: { text: string; link: string }[];
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

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setInputValue("");

    // Check if user is asking about dashboard
    if (userMessage.toLowerCase().includes("dashboard") || 
        userMessage.toLowerCase().includes("route me to my dashboard")) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: "assistant",
          content: "Sure! You can go to your dashboard by clicking the button below:",
          buttons: [
            {
              text: "Go to Dashboard",
              link: "/artisan/home"
            }
          ]
        }]);
      }, 500);
    }
    // Add other message handling logic here
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          className="fixed bottom-6 right-6 rounded-full w-14 h-14 p-0 bg-blue-950 hover:bg-blue-900 shadow-lg"
          aria-label="Chat with AI"
        >
          <MessageCircle className="h-6 w-6 text-white" />
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
                <div key={index}>
                  <div
                    className={`max-w-[80%] p-3 text-sm rounded-lg shadow break-words ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white ml-auto"
                        : "bg-white text-black mr-auto border"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "assistant" && msg.buttons && (
                    <div className="mt-2 ml-2">
                      {msg.buttons.map((button, btnIndex) => (
                        <Link key={btnIndex} href={button.link}>
                          <Button className="bg-blue-950 text-white hover:bg-blue-900">
                            {button.text}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  )}
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
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <Button 
            className="rounded-l-none bg-blue-950 hover:bg-blue-900"
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ChatBotModal;
