import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* url shortener */}
      <div className='mainbody'>
        <h1>URL Shortener</h1>
        <div className='inputpart'>
          <input type="text" id="url" placeholder="URL" />
          <button>Shorten</button>
        </div>
      </div>
    </>
  )
}

export default App
