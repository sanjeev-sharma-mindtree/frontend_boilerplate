import './style.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Dashboard from './features/home/Dashboard'
import Offers from './features/offers/Offers'
import Rewards from './features/rewards/Rewards'
import Customers from './features/customers/Customers'
import HelpCenter from './features/help/HelpCenter'
import Settings from './features/settings/Settings'
import NavBar from './components/NavBar'
import CampaignView from './features/campaign/CampaignView'

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/campaigns" element={<CampaignView />}></Route>
          <Route path="/offers" element={<Offers />}></Route>
          <Route path="/rewards" element={<Rewards />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/help-center" element={<HelpCenter />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
