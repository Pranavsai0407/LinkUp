import { useState } from "react";
import LottieAnimation from "@/components/common/lottie-animation";
// Import Google Generative AI
import { GoogleGenerativeAI } from "@google/generative-ai";
import { AiOutlineClose } from "react-icons/ai";
import ChatHeader from "./components/ChatHeader";

const EmptyChatContainer = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle sidebar open/close
  const [messages, setMessages] = useState([]); // Store messages
  const [inputMessage, setInputMessage] = useState(""); // User input
  const [loading, setLoading] = useState(false); // Loading AI response

  // Replace this with your actual API key
  const API_KEY = import.meta.env.VITE_API_KEY;

  // Initialize Google AI API with the API key
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Toggle the chatbot sidebar
  const toggleChat = () => setIsOpen(!isOpen);

  // Function to handle sending user messages and getting bot response
  const sendMessage = async () => {
    if (!inputMessage.trim()) return;
    else console.log(inputMessage); // Don't send empty messages
    const userMessage = { role: "user", content: inputMessage };

    // Add the user's message to the chat
    setMessages([...messages, userMessage]);
    setInputMessage(""); // Clear the input

    // Simulate bot response (using Google AI API)
    setLoading(true);
    try {
      // Use Google Generative AI to get a response
      const result = await model.generateContent(inputMessage);
      const botMessage = { role: "bot", content: result.response.text() };

      // Add the bot's message to the chat
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex-1 md:bg-[#1c1d25] md:flex flex-col justify-center items-center hidden duration-1000 transition-all">
      <LottieAnimation />
      <div className="text-opacity-80 text-white flex flex-col gap-5 items-center mt-10 lg:text-4xl text-3xl transition-all duration-1000 text-center">
        <h3 className="poppins-medium">
          Hi
          <span className="text-purple-500">!</span> Welcome to
          <span className="text-purple-500"> Link-Up </span>
          <span className="text-purple-500">.</span>
        </h3>
      </div>

      {/* Floating Chatbot Button */}

      {/* Sliding Sidebar for Chat */}
      <div
        className={`fixed top-0 right-0 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-40 flex flex-col`}
        style={{
          top: "0px",
          height: "100vh", // Full viewport height minus the button space (80px)
          width: "1195.5px",
          bottom: "0px", // Stops just above the button
        }}
      >
        <ChatHeader />
        {/* Chat messages display */}
        <div className="flex-1 p-5 md:bg-[#1c1d25] overflow-y-auto flex flex-col">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.role === "user"
                ? "bg-[#8417ff]/5 text-[#8417ff]/90 border-[#8417ff]/50 text-right self-end" // User messages float right
                : "bg-[#2a2b33]/50 text-white/80 border-[#ffffff]/20 text-left self-start" // AI messages float left
              } border inline-block p-4 rounded my-1 max-w-[50%] break-words ml-9`}
              style={{
                alignSelf: message.role === "user" ? "flex-end" : "flex-start",
              }}
            >
              {message.content}
            </div>
          ))}
          {loading && <div className="text-gray-400">Bot is typing...</div>}
        </div>
        {/* Input box for message */}
        <div className="h-[10vh] bg-[#1c1d25] flex justify-center items-center px-8 mr-12 gap-5 mb-5">
          <div className="flex-1 flex bg-[#2a2b33] rounded-md items-center gap-4 pr-8">
            <input
              type="text"
              className="flex-1 p-5 bg-transparent rounded-md focus:border-none focus:outline-none"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()} // Send on Enter key
              placeholder="Type your message..."
            />
          </div>
          <button
            className="bg-purple-500 text-white p-2 rounded-r-lg"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>

      <div
        className="fixed bottom-5 right-5 z-50 bg-purple-500 text-white p-3 rounded-full cursor-pointer shadow-lg w-12 h-12 flex items-center justify-center"
        onClick={toggleChat}
        style={{ fontSize: "20px", lineHeight: "40px" }} // Button style
      >
        {isOpen ? <AiOutlineClose /> : "💬"} {/* Toggle button icons */}
      </div>
    </div>
  );
};

export default EmptyChatContainer;

/*value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()} // Send on Enter key
            placeholder="Type your message..."*/

/**/

/*value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()} // Send on Enter key
              placeholder="Type your message..."*/
