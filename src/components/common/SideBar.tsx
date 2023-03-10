import { styled, useTheme, Theme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
import { NAVIGATION_ITEMS, DRAWER_WIDTH } from '../../utils/constants'

const useStyles = makeStyles((theme: any) => ({
  activeNav: {
    backgroundColor: 'rgba(0, 98, 255, 0.05)',
    color: '#12409F',
    borderLeft: '5px solid #12409F',
    width: '97% !important',
  },
}))

const Drawer = styled(MuiDrawer)(() => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
  },
}))

type SideBarProps = {
  showSideBar: boolean
}

export default function SideBar({ showSideBar }: SideBarProps) {
  const navigate = useNavigate()
  const classes = useStyles()

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={showSideBar}>
        <List sx={{ mt: '4rem' }}>
          {NAVIGATION_ITEMS.map((navItem) => {
            const isActiveLink = window.location.pathname === navItem.link

            return (
              <ListItem
                key={navItem.label}
                disablePadding
                sx={{ display: 'block' }}
                onClick={() => {
                  navigate(`${navItem.link}`)
                }}
                className={isActiveLink ? classes.activeNav : ''}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: showSideBar ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: showSideBar ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {isActiveLink ? navItem.activeIcon : navItem.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={navItem.label}
                    sx={{ opacity: showSideBar ? 1 : 0 }}
                    primaryTypographyProps={{
                      variant: 'subtitle2',
                      style: {
                        whiteSpace: 'normal',
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      </Drawer>
    </Box>
  )
}
