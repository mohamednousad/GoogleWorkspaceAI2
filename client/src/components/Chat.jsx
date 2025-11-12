import { useState } from "react";
import axios from "axios";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  async function send() {
    if (!input) return;
    setMessages((m) => [...m, { role: "user", text: input }]);
    const payload = { prompt: input };
    setInput("");
    try {
      const base = import.meta.env.VITE_API_BASE || "http://localhost:4000";
      const res = await axios.post(`${base}/api/gemini`, payload);
      setMessages((m) => [
        ...m,
        { role: "assistant", text: res.data?.text || JSON.stringify(res.data) },
      ]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        { role: "assistant", text: "Error contacting server" },
      ]);
    }
  }

  return (
    <div className="w-full bg-white rounded p-4 shadow">
      <div className="h-64 overflow-auto mb-3 flex flex-col gap-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={m.role === "user" ? "text-right" : "text-left"}
          >
            <div
              className={`inline-block px-3 py-2 rounded ${
                m.role === "user"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Ask the assistant..."
        />
        <button
          onClick={send}
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
