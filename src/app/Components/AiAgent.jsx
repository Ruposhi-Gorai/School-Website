'use client'
import React, { useState, useRef, useEffect } from "react";
import { MdChat } from "react-icons/md";

export default function AiAgentUI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]); // {role: "user"|"assistant", text}
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef();

  // Auto-scroll on new message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, open]);

  // Send message to backend
  async function sendMessage() {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/ai/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMsg.text }),
      });

      const data = await response.json();
      const botText = data?.reply || "Sorry, I couldn't fetch a response.";

      setMessages((prev) => [...prev, { role: "assistant", text: botText }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Server error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {/* Floating Chat Icon */}
      <div
        className="fixed bottom-7 right-6 z-50 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="w-14 h-14 rounded-full bg-blue-600 shadow-xl flex items-center justify-center animate-pulse">
          <span className="text-white text-2xl"><MdChat /></span>
        </div>
      </div>

      {/* Chat Modal */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white shadow-2xl rounded-2xl p-4 z-50 ">
          <h2 className="text-xl font-bold text-center"> AI Assistant</h2>
          <p className="text-xs text-gray-600 text-center mb-3">
            Ask anything about admissions, fees, facilities, or updates.
          </p>

          {/* Chat Window */}
          <div
            ref={chatRef}
            className="h-64 bg-gray-50 border border-gray-200 rounded-xl p-3 overflow-y-auto text-gray-700 text-sm mb-3 space-y-2"
          >
            {messages.length === 0 && (
              <p className="text-gray-400 text-center">
                Chat responses will appear here...
              </p>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={msg.role === "user" ? "text-right" : "text-left"}>
                <div
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-50 text-right"
                      : "bg-gray-100 text-left"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <p className="text-gray-500 text-left text-sm"> typing...</p>
            )}
          </div>

          {/* Input + Button */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 border rounded-xl p-2 focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="px-3 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
