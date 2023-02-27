import './style.css'
import {useState} from 'react'
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
  const [showSideBar, setShowSideBar] = useState<boolean>(true);

  return (
    <>
      <NavBar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard showSideBar={showSideBar} />}></Route>
          <Route path="/campaigns" element={<CampaignView showSideBar={showSideBar} />}></Route>
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
