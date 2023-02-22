import './style.css'
import Button from '@mui/material/Button'

function App() {
  return (
    <div>
      <Button variant="contained">Hello World</Button>

      <h1 color='primary'>
        App {process.env.NODE_ENV}
        {process.env.name}

      </h1>
    </div>
  )
}

export default App
