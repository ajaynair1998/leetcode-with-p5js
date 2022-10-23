import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useEffect } from 'react'

interface IProps {
  open: boolean
  handleClose: () => void
  items: IItem[]
}

interface IItem {
  value: string
  label: string
}

const drawerWidth = 240

export default function PermanentDrawer(props: IProps) {
  const [open, setOpen] = React.useState(true)

  useEffect(() => {
    console.log(props.open)
    setOpen(props.open)
  }, [props])
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          zIndex: -1,
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='temporary'
        anchor='left'
        open={open}
      >
        <Toolbar />
        <Toolbar />

        <List>
          {props.items.map(({ label, value }, index) => (
            <ListItem key={value} disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List
          sx={{
            bottom: 0,
            position: 'fixed',
            width: drawerWidth,
            opacity: 1,
            backgroundColor: 'white',
          }}
        >
          <ListItem disablePadding>
            <ListItemButton onClick={() => props.handleClose()}>
              <ListItemText primary={'Hide'} />
              <ListItemIcon>
                {' '}
                <ArrowBackIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  )
}
