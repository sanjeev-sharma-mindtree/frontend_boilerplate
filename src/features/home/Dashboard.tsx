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
import Grid from '@mui/material/Grid'
import styled from '@emotion/styled'
import CampaignIcon from '@mui/icons-material/Campaign'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const Dashboard = () => {
  const CampaignCard = styled(Card)({
    background: `linear-gradient(0deg, rgba(34,193,195,0.6) 0%, rgba(253,187,45,0.14066876750700286) 100%)`,
  })
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={2} direction="row">
            <CampaignCard sx={{ width: `50%`, height: `140` }}>
              <CardContent>
                <Stack spacing={2} direction="row">
                  <CampaignIcon sx={{ fontSize: 60 }} />

                  <Stack>
                    <Typography variant="h6" color="text.secondary">
                      Campaign
                    </Typography>
                    <Typography>
                      <span>154</span>
                      <span>
                        <a href="#">15</a> active Campaign
                      </span>
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </CampaignCard>
            <CampaignCard sx={{ width: `50%`, height: `140` }}>
              <CardContent>
                <Stack spacing={2} direction="row">
                  <CampaignIcon sx={{ fontSize: 60 }} />

                  <Stack>
                    <Typography variant="h6" color="text.secondary">
                      Campaign
                    </Typography>
                    <Typography>
                      <span>154</span>

                      <span>
                        <a href="#">15</a> active Campaign
                      </span>
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </CampaignCard>
            <CampaignCard sx={{ width: `50%`, height: `140` }}>
              <CardContent>
                <Stack spacing={2} direction="row">
                  <CampaignIcon sx={{ fontSize: 60 }} />

                  <Stack>
                    <Typography variant="h6" color="text.secondary">
                      Campaign
                    </Typography>
                    <Typography>
                      <span>154</span>

                      <span>
                        <a href="#">15</a> active Campaign
                      </span>
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </CampaignCard>
          </Stack>
        </Grid>
      </Grid>
      <Box height={30} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ height: `40vh` }}>
            <CardContent>
              <BarChart
                width={1000}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
