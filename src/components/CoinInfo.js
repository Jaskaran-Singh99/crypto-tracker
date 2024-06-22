import React, { useEffect, useState } from 'react'
import { CryptoState } from '../CryptoContext'
import axios from 'axios'
import { HistoricalChart } from '../config/api'
import { CircularProgress, makeStyles } from '@material-ui/core'
import { chartDays } from "../config/data";
import SelectButton from '../components/SelectButton.js'
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const CoinInfo = ({coin}) => {
  const [historicData, setHistoricData] = useState()
  const [days, setDays] = useState(1)
  const {currency} = CryptoState()
  const [flag,setflag] = useState(false);
  const fetchHistoricData = async ()=>{
    const {data} = await axios.get(HistoricalChart(coin.id, days, currency))
    setflag(true);
    setHistoricData(data.prices);
    console.log(data)
  } 

  useEffect(()=>{
    fetchHistoricData()
    
  }, [currency, days])

  const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.container}>
    {!historicData | flag===false ? (
      <CircularProgress
        style={{ color: "gold" }}
        size={250}
        thickness={1}
      />
    ) : (
      <>
        <Line
          data={{
            labels: historicData.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: historicData.map((coin) => coin[1]),
                label: `Price ( Past ${days} Days ) in ${currency}`,
                borderColor: "#EEBC1D",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
        <div
          style={{
            display: "flex",
            marginTop: 20,
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {chartDays.map((day) => (
            <SelectButton
              key={day.value}
              onClick={() => {setDays(day.value);
                setflag(false);
              }}
              selected={day.value === days}
            >
              {day.label}
            </SelectButton>
          ))}
        </div>
      </>
    )}
  </div>
  )
}

export default CoinInfo