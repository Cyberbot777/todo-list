import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [hovered, setHovered] = useState(null);

  // Load Todos
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch(
          "https://playground.4geeks.com/todo/users/richard_h_todo"
        );
        const data = await res.json();
        setTodos(data.todos);
        console.log("Loaded todos:", data.todos);
      } catch (err) {
        console.error("Error fetching todos:", err);
      }
    };

    fetchTodos();
  }, []);

  // Post
  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      try {
        const res = await fetch(
          "https://playground.4geeks.com/todo/todos/richard_h_todo",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              label: input.trim(),
              done: false,
            }),
          }
        );

        if (res.ok) {
          const updated = await fetch(
            "https://playground.4geeks.com/todo/users/richard_h_todo"
          );
          const data = await updated.json();
          setTodos(data.todos);
          setInput("");
          console.log("Task added");
        } else {
          console.error("Failed to add task");
        }
      } catch (err) {
        console.error("Error adding todo:", err);
      }
    }
  };

  // Delete //
  const deleteTodo = async (id) => {
    try {
      const res = await fetch(
        `https://playground.4geeks.com/todo/todos/${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        console.log(`Deleted todo with ID: ${id}`);
        // Reload todos after delete
        const updated = await fetch(
          "https://playground.4geeks.com/todo/users/richard_h_todo"
        );
        const data = await updated.json();
        setTodos(data.todos);
      } else {
        console.error("Failed to delete todo");
      }
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  // Clear All
  const clearAllTodos = async () => {
    try {
      // Delete each todo one by one
      await Promise.all(
        todos.map((todo) =>
          fetch(`https://playground.4geeks.com/todo/todos/${todo.id}`, {
            method: "DELETE",
          })
        )
      );

      // Then reload the list
      const updated = await fetch(
        "https://playground.4geeks.com/todo/users/richard_h_todo"
      );
      const data = await updated.json();
      setTodos(data.todos);
      console.log("All todos cleared");
    } catch (err) {
      console.error("Error clearing todos:", err);
    }
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
            {todos.length === 0 ? (
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
              todos.map((task, index) => (
                <li
                  key={task.id}
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
                  {task.label}
                  {hovered === index && (
                    <button
                      onClick={() => deleteTodo(task.id)}
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
          {todos.length > 0 && (
            <button
              onClick={clearAllTodos}
              style={{
                marginTop: "1rem",
                padding: "0.75rem 1.5rem",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                color: "#ccc",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: 500,
                fontSize: "0.9rem",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                backdropFilter: "blur(6px)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.04)";
                e.currentTarget.style.color = "#ccc";
              }}
            >
              Clear All Tasks
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
