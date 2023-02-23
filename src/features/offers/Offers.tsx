import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import SideBar from '../../components/SideBar'

const Offers = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Offers</h1>
        </Box>
      </Box>
    </>
  )
}

export default Offers
