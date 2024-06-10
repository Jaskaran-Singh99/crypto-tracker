import React from 'react'
import {AppBar, Container, MenuItem, Select, Toolbar, Typography} from '@mui/material'

export const Header = () => {
  return (
    <AppBar color='primary' position='static'>
      <Container>
        <Toolbar>
          <Typography>Crypto Tracker</Typography>
          <Select variant='outlined' style={{width:100, height:40, marginLeft:15}}>
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="INR">INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
