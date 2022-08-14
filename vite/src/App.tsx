import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <img src="/home/admin/counter/vite/src/assets/vite.webp" className="logo" alt="Kakayouto Pisya" />
      </div>
      <h1>Pisya</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
