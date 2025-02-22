import { useState } from "react";
import Editor from "react-simple-code-editor";
import "prismjs/themes/prism-tomorrow.css";
import axios from "axios";
import Markdown from "react-markdown";
import prism from "prismjs";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "./App.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Components</h3>
      <ul>
        <li>Code Editor</li>
        <li>AI Review</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}

function App() {
  const [code, setCode] = useState(`function sum() { return 1 + 1; }`);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const reviewCode = async () => {
    setLoading(true);
    setError("");
    setReview("");
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/ai/get-review`, { code });
      setReview(data);
    } catch {
      setError("Failed to fetch code review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <Sidebar />
      <section className="editor-container">
        <h2>Code Editor</h2>
        <div className="editor-wrapper">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: 'Fira Code, monospace',
              fontSize: 16,
              backgroundColor: "#1e1e1e",
              color: "#ffffff",
              height: "300px",
              overflowY: "auto"
            }}
          />
        </div>
        <button onClick={reviewCode} className="review-button" disabled={loading}>
          {loading ? "Reviewing..." : "Review Code"}
        </button>
      </section>

      <section className="review-container">
        <h2>AI Review</h2>
        <div className="review-output">
          {loading ? (
            <div className="rocket-loader">
              <div className="rocket-body"></div>
              <div className="rocket-fire"></div>
            </div>
          ) : error ? (
            <p className="error-text">{error}</p>
          ) : (
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
