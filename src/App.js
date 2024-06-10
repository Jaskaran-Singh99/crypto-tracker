import './App.css';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import { Header } from './components/Header';
import { Homepage } from './pages/Homepage';
import { CoinPage } from './pages/CoinPage';
// import { makeStyles } from '@mui/sty';

function App() {
//   const useStyles= makeStyles(()=>({
//     App:{
// backgroundColor:"#14116a"
//     }
//   }))
//   const classes = useStyles()
  return (
    <div>
    <Router>
        <Header></Header>
      <Routes>
      <Route path="/" element={<Homepage></Homepage>} exact></Route>
      <Route path='/coin/:id' element={<CoinPage></CoinPage>}></Route>
      </Routes>  
    </Router>
    </div>
     
  );
}

export default App;
