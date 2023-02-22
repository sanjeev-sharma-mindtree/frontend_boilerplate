import './style.css'
import jpg_img from './assets/img/logo_jpg.jpg'
import svg_img from './assets/img/add.svg'
import png_img from './assets/img/logo_png.png'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
const App = () => {
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ]
  return (
    <div>
      <Button variant="contained">Hello World</Button>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      <h1>
        App {process.env.NODE_ENV}
        {process.env.name}
        <img src={jpg_img} alt={jpg_img} />
        <img src={png_img} alt={png_img} />
        <img src={svg_img} alt={svg_img} />
      </h1>
    </div>
  )
}

export default App