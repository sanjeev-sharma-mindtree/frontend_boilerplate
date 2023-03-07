import './style.css'
import { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Box } from '@mui/system'
import SideBar from './components/common/SideBar'
import Dashboard from './components/home/Dashboard'
import Offers from './features/offers/Offers'
import Rewards from './features/rewards/Rewards'
import Customers from './features/customers/Customers'
import HelpCenter from './features/help/HelpCenter'
import Settings from './features/settings/Settings'
import Header from './components/common/Header'
import Campaign from './pages/Campaign'
import CreateCampaign from './pages/CreateCampaign'

function App() {
  const [showSideBar, setShowSideBar] = useState<boolean>(true)

  return (
    <>
      <Header setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      <BrowserRouter>
        <Box height={70} />
        <Box sx={{ display: 'flex' }}>
          {window.location.pathname !== '/create-campaign' && (
            <SideBar showSideBar={showSideBar} />
          )}
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/campaigns" element={<Campaign />}></Route>
            <Route path="/create-campaign" element={<CreateCampaign />}></Route>
            <Route path="/offers" element={<Offers />}></Route>
            <Route path="/rewards" element={<Rewards />}></Route>
            <Route path="/customers" element={<Customers />}></Route>
            <Route path="/help-center" element={<HelpCenter />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  )
}

export default App
