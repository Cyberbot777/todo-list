import { useState } from "react";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [hovered, setHovered] = useState(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setTasks([...tasks, input.trim()]);
      setInput("");
    }
  };

  const handleDelete = (indexToDelete) => {
    const filteredTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(filteredTasks);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "6rem",
        paddingBottom: "4rem",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.035)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "12px",
          padding: "2rem",
          width: "100%",
          maxWidth: "500px",
          color: "#bbb",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: "2rem",
            marginBottom: "1.5rem",
          }}
        >
          todos
        </h1>

        <input
          type="text"
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            width: "90%", 
            margin: "0 auto", 
            display: "block", 
            padding: "1rem",
            fontSize: "1rem",
            backgroundColor: "#1a1a1a",
            color: "#bbb",
            border: "1px solid #333",
            borderRadius: "6px",
            marginBottom: "1rem",
          }}
        />
        <div style={{ maxHeight: "300px", overflowY: "auto" }}>
          <ul style={{ padding: 0, margin: 0 }}>
            {tasks.length === 0 ? (
              <li
                style={{
                  color: "#666",
                  fontStyle: "italic",
                  padding: "0.5rem 0",
                  listStyle: "none",
                }}
              >
                No tasks, add a task
              </li>
            ) : (
              tasks.map((task, index) => (
                <li
                  key={index}
                  style={{
                    position: "relative",
                    padding: "1rem",
                    backgroundColor: "rgba(255, 255, 255, 0.025)",
                    marginBottom: "0.75rem",
                    borderRadius: "6px",
                    listStyle: "none",
                    color: "#bbb",
                  }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {task}
                  {hovered === index && (
                    <button
                      onClick={() => handleDelete(index)}
                      style={{
                        position: "absolute",
                        right: "1rem",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "none",
                        border: "none",
                        color: "#ff4d4f",
                        fontSize: "1.1rem",
                        cursor: "pointer",
                      }}
                    >
                      ✕
                    </button>
                  )}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
