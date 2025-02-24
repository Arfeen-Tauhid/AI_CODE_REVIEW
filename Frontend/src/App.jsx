import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

function App() {
  const [ count, setCount ] = useState(0)
  const [ code, setCode ] = useState(` function sum() {
  return 1 + 1
}`)

  const [ review, setReview ] = useState(``)

  useEffect(() => {
    prism.highlightAll()
  }, [code])

  const BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL|| import.meta.env.VITE||import.meta.env.VITES;

  async function reviewCode() {
    try{
      if(!BASE_URL){
        throw new Error("Backend URL is not defined in environment variables.")
      }
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL||VITE||VITES}/ai/get-review`, { code } ,{
       headers: {"Content-Type":"application/json",},
       timeout:120000,
    })
    setReview(response.data)
  }catch{
    console.error("API Error:",error.message || error);
    throw error;
  }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
                overflowY: "auto"
              }}
            />
          </div>
          <div
            onClick={reviewCode}
            className="review">Review
          </div>
        </div>
        <div className="right">
          <Markdown

            rehypePlugins={[ rehypeHighlight ]}

          >{review}</Markdown>
        </div>
      </main>
    </>
  )
}



export default App




// async function reviewCode() {
//   const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL||VITE||VITES}/ai/get-review`, { code })
//   setReview(response.data)
// }