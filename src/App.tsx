import './style.css'
import Button from '@mui/material/Button'
import SideBar from './components/SideBar'
import Feed from './components/Feed'
import RightBar from './components/RightBar'
import { Box } from '@mui/material'
import Header from './components/Header'
import { Stack } from '@mui/system'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './features/home/Dashboard'
import Campaigns from './features/compaigns/Campaigns'
import Offers from './features/offers/Offers'
import Rewards from './features/rewards/Rewards'
import Customers from './features/customers/Customers'
import HelpCenter from './features/help/HelpCenter'
import Settings from './features/settings/Settings'
import NavBar from './components/Navbar'
function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/Campaigns" element={<Campaigns />}></Route>
          <Route path="/Offers" element={<Offers />}></Route>
          <Route path="/Rewards" element={<Rewards />}></Route>
          <Route path="/Cusomers" element={<Customers />}></Route>
          <Route path="/HelpCenter" element={<HelpCenter />}></Route>
          <Route path="/Settings" element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
