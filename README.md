# 🤖 AI Code Reviewer

**An AI-powered tool to analyze code, suggest improvements, and highlight syntax in real-time.**  
[![Live Demo](https://img.shields.io/badge/Demo-Live%20Project-green)](https://ai-code-review-eosin.vercel.app)  
![Project Preview](https://github.com/Arfeen-Tauhid/AI_CODE_REVIEW/blob/main/PREVIEW.jpeg) 

## 🚀 Features
- **AI-Powered Code Analysis**: Uses Google's Generative AI to review code and suggest optimizations.
- **Syntax Highlighting**: Integrated with Prism.js for clean code visualization.
- **Markdown Support**: Rendered with `react-markdown` for documentation-friendly output.
- **Real-Time Editing**: Built with `react-simple-code-editor` for seamless code input.

## 🛠️ Installation

### Frontend Setup
```bash
cd frontend
npm install
# Dependencies: react, axios, prismjs, react-simple-code-editor, etc.

### Backend Setup
cd backend
npm install
# Dependencies: express, @google/generative-ai, cors, dotenv

### Environment Variables
Create a .env file in the backend directory:
PORT=3000
GOOGLE_API_KEY=your_google_ai_api_key_here

🖥️ Usage
### Start the Backend:
cd backend
npm start  # Uses nodemon for development

### Start the Frontend:
cd frontend
npm start

🔧 Tech Stack
Frontend
| Dependency | Purpose | |------------|---------| | React 19 | UI Framework | | axios | HTTP requests to backend | | prismjs | Syntax highlighting | | react-simple-code-editor | Code input component |

Backend
| Dependency | Purpose | |------------|---------| | Express | Server framework | | @google/generative-ai | AI code analysis | | cors | Cross-origin requests | | dotenv | Environment variables |

📂 Code Structure
Key Files
frontend/src/App.js: Main React component with code editor and AI response display.
backend/server.js: Express server handling AI requests.

🤝 Contributing
Fork the repository
Create a feature branch (git checkout -b feature/improvement)
Commit changes (git commit -m 'Add amazing feature')
Push to branch (git push origin feature/improvement)
Open a Pull Request

Built with ❤️ by [ARFEEN TAUHID]
📧 Contact: arfeentauhid09@gmail.com

Feel free to modify any sections to better fit your
