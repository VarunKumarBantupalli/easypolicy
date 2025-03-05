import { useState } from "react";
import robo from '../../assets/images/robo.png'

const apiKey = "YOUR_GEMINI_API_KEY"; // Replace with your actual API key

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const sendMessage = async () => {
    if (!input.trim()) return;
  
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
  
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }],
            generationConfig: { temperature: 0.7, maxOutputTokens: 150 },
          }),
        }
      );
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error?.message || "Failed to fetch response");
      }
  
      const botReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't understand that.";
  
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("❌ API Error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error processing request. Try again later." },
      ]);
    }
  
    setInput(""); // Clear input field
  };
    

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end py-2">
      {/* Chatbot Toggle Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="w-24 h-24">
        <img
          src={robo}
          alt="Chatbot"
          className="w-full h-full object-contain cursor-pointer"
        />
        <span className="font-bold py-2">Policy AI</span>
      </button>

      {/* Chatbot Box */}
      {isOpen && (
        <div className="bg-white w-72 h-96 p-4 shadow-xl rounded-lg mt-2 flex flex-col">
          <div className="text-lg font-bold mb-2 flex justify-between">
            <span>Chatbot</span>
            <button onClick={() => setIsOpen(false)} className="text-red-500">
              ✖
            </button>
          </div>
          <div className="h-64 border-t pt-2 overflow-y-auto flex flex-col gap-2">
            {messages.map((msg, index) => (
              <p
                key={index}
                className={`text-sm p-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-200 self-end"
                    : "bg-gray-200 self-start"
                }`}
              >
                {msg.text}
              </p>
            ))}
          </div>
          <div className="mt-auto flex">
            <input
              type="text"
              className="flex-1 p-2 border rounded-l-lg text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
            />
            <button
              className="bg-blue-500 text-white px-4 rounded-r-lg"
              onClick={sendMessage}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
