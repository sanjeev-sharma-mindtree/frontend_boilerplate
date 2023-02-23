import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import SideBar from '../../components/SideBar'
import Grid from '@mui/material/Grid'
const Dashboard = () => {
  return (
    <>
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack spacing={2} direction="row">
                <Card sx={{ width: `50%`, height: `140` }}>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Campaign
                    </Typography>
                    <Typography>
                      <span>154</span>
                    </Typography>
                    <Typography>
                      <span>
                        <a href="#">15</a> active Campaign
                      </span>
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ width: `50%`, height: `140` }}>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ width: `50%`, height: `140` }}>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacin={2}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                    ></Typography>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                    ></Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={30} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: `60vh` }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: `60vh` }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Dashboard
