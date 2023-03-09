import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Container, Stack } from '@mui/system'

import CampaignListView from '../components/campaign/CampaignListView'
import CampaignSummaryView from '../components/campaign/CampaignSummaryView'
import { Card, CardContent, CssBaseline, Grid, Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import styled from '@emotion/styled'
import { theme } from '../theme'

export default function Campaign() {
  const CampaignItems = styled(Card)({
    height: '140px',

    // background: `linear-gradient(0deg, rgba(34,193,195,0.6) 0%, rgba(253,187,45,0.14066876750700286) 100%)`,
  })
  return (
    <>
      <Container maxWidth="xl">
        <Box pt={2} pb={2}>
          <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
            Campaign
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <CampaignItems sx={{ background: theme.palette.primary.main }}>
                <CardContent>
                  <a id="update" href="#">
                    <Stack
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      pt={1}
                    >
                      <AddCircleIcon
                        color={theme.palette.primary.contrastText}
                        sx={{
                          fontSize: 60,
                          color: theme.palette.primary.contrastText,
                        }}
                      />
                      <Typography
                        content="span"
                        pt={1}
                        sx={{ color: theme.palette.primary.contrastText }}
                      >
                        CREATE CAMPAIGN
                      </Typography>
                    </Stack>
                  </a>
                </CardContent>
              </CampaignItems>
            </Grid>
            <Grid item xs={9}>
              <CampaignItems sx={{ height: `140` }}>
                <CardContent>
                  <Stack spacing={2} direction="row">
                    <AddCircleIcon sx={{ fontSize: 60 }} />

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
              </CampaignItems>
            </Grid>
          </Grid>
        </Box>
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        <Stack>
          <CampaignSummaryView />
          <CampaignListView />
        </Stack> */}
      </Container>
    </>
  )
}
