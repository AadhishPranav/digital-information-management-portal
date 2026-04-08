import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Chatbot.css";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  // ✅ Welcome message
  useEffect(() => {
    setMessages([
      {
        text: "Hi 👋 I am EduBot! Ask me about news, schemes, policies, scholarships or higher studies.",
        sender: "bot"
      }
    ]);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);

    const text = input.toLowerCase();

    let endpoint = "";
    let type = "";

    // ✅ SMART KEYWORD MAP (NLP-like detection)
    const keywordMap = [
      {
        type: "news",
        endpoint: "news",
        keywords: ["news", "update", "latest"]
      },
      {
        type: "schemes",
        endpoint: "schemes",
        keywords: ["scheme", "schemes", "yojana"]
      },
      {
        type: "policies",
        endpoint: "policies",
        keywords: ["policy", "policies", "rule", "rules"]
      },
      {
        type: "regulations",
        endpoint: "regulations",
        keywords: ["regulation", "regulations", "law", "act"]
      },
      {
        type: "scholarships",
        endpoint: "scholarships",
        keywords: ["scholarship", "scholarships", "fund", "financial aid"]
      },
      {
        type: "higherstudies",
        endpoint: "higherstudies",
        keywords: [
          "higher study",
          "higher studies",
          "higher education",
          "study abroad",
          "abroad",
          "university",
          "college"
        ]
      }
    ];

    // ✅ Find matching category
    const match = keywordMap.find(item =>
      item.keywords.some(keyword => text.includes(keyword))
    );

    if (!match) {
      setMessages(prev => [
        ...prev,
        {
          text: "❌ Sorry, I couldn’t understand. Try asking about news, schemes, policies, scholarships or higher studies.",
          sender: "bot"
        }
      ]);
      setInput("");
      return;
    }

    endpoint = match.endpoint;
    type = match.type;

    try {
      const res = await fetch(`https://edu-portal-backend-qjkm.onrender.com/api/${endpoint}`);
      const data = await res.json();

      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          data: data.slice(0, 3),
          type
        }
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          text: "⚠️ Error fetching data. Try again.",
          sender: "bot"
        }
      ]);
    }

    setInput("");
  };

  return (
    <div className="chatbot-wrapper">

      {/* Floating Button */}
      <div className="chatbot-button" onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* Chat Window */}
      {open && (
        <div className="chatbot-window">

          <div className="chatbot-header">
            EduBot 🤖
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, i) => (
              <div key={i} className="message-block">

                {/* Text Message */}
                {msg.text && (
                  <div className={`msg ${msg.sender}`}>
                    {msg.text}
                  </div>
                )}

                {/* Cards */}
                {msg.data &&
                  msg.data.map(item => (
                    <div key={item._id} className="chat-card">
                      <b>{item.title}</b>
                      <p>{item.description?.substring(0, 60)}...</p>

                      <button
                        className="view-btn"
                        onClick={() => navigate(`/${msg.type}/${item._id}`)}
                      >
                        View Details
                      </button>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          <div className="chatbot-footer">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about news, schemes..."
            />
            <button onClick={handleSend}>Send</button>
          </div>

        </div>
      )}
    </div>
  );
}

export default Chatbot;