import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { AppBar, styled } from '@mui/material'

interface IProps {
  items: item[]
  handleClickTab: (value: string) => void
}
interface item {
  value: string
  label: string
  action: () => void
}
interface StyledTabsProps {
  children?: React.ReactNode
  value: string
  onChange: (event: React.SyntheticEvent, newValue: string) => void
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }} />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 70,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(255, 255, 255, 0.32)',
  },
  '& .Mui-selected': {
    color: '#fff!important',
  },
})

export default function ColorTabs(props: IProps) {
  const [value, setValue] = React.useState(props.items[0].value)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
    props.handleClickTab(newValue)
  }

  return (
    <AppBar
      sx={{
        width: '100%',
        position: 'static',
        boxShadow: 0,
        '&.Mui-selected': {
          color: '#fff',
        },
      }}
    >
      <StyledTabs value={value} onChange={handleChange} aria-label='secondary tabs example'>
        {props.items?.map((item) => {
          return <Tab value={item.value} label={item.label} key={item.value} />
        })}
      </StyledTabs>
    </AppBar>
  )
}
