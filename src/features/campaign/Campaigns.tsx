import styled from '@emotion/styled'
import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import SideBar from '../../components/SideBar'
const Campaigns = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Campaign</h1>
      </Box>
    </Box>
  )
}

export default Campaigns
