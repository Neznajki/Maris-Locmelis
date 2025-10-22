import { useState } from 'react'
import reactLogo from './assets/react.svg'
import sunFlight from '/sunFlight.jpg'
import viteLogo from '/vite.svg'
import PopupSpoiler from './components/PopupSpoiler'
import Spoiler from './components/Spoiler'
import './App.css'
import './App.css'
import './assets/popupSpoiler.css'
import './assets/spoiler.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Māris Ločmelis Page</h1>
      <div>
        <a href="https://github.com/Neznajki" target="_blank" rel="noopener noreferrer">
          <img src={sunFlight} alt="Sunny Day !!" />
        </a>
      </div>
      <PopupSpoiler title="Used For Page">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </PopupSpoiler>

      <Spoiler title="My Pages">
        <div>
          <a href="https://github.com/Neznajki" target="_blank">
            github
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/neznajki" target="_blank" rel="noopener noreferrer">
            facebook
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ml-698627181/" target="_blank" rel="noopener noreferrer">
            linked-in
          </a>
        </div>
      </Spoiler>
    </>
  )
}

export default App
