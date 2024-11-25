import Buttons from './components/Buttons'
import Img from './components/Img'
import './App.css'

function App() {
  return (
    <div className="App">
      <Buttons label="bel bottone" />
      <Img
        src="https://preview.redd.it/27ueu6aj3upb1.jpg?auto=webp&s=af48dbb23c769a36356bce4fe8e6dd1ae1a31678"
        alt="Robin"
      />
    </div>
  )
}

export default App
