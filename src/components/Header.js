import React from 'react'
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { CryptoState } from '../CryptoContext'

import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    // color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

// const darkTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#fff",
//     },
//     type: 'dark',
//   },
// });


export const Header = () => {
  const classes = useStyles();
  const {currency, setCurrency} = CryptoState()

  return (
    // <ThemeProvider theme={darkTheme}>
  
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography className={classes.title} variant='h6'>Crypto Tracker</Typography>
          <Select variant='outlined' style={{width:100, height:40, marginLeft:15, color:'black'}} value={currency} onChange={(e)=> setCurrency(e.target.value)}>
          
            <MenuItem value="INR" >INR</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
   
    // </ThemeProvider>

  )
}
