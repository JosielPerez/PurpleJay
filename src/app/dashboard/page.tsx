//@ts-nocheck
<<<<<<< HEAD
'use client';
import Buy from '@/components/buy/Buy';
import StockGraph from '@/components/stockgraph/StockGraph';
import StockList from '@/components/stocklist/StockList'
import React, {useEffect, useState} from 'react'
import styles from './styles.module.css'
import Sell from '@/components/sell/Sell';
import TimeRange from '@/components/timerange/TimeRange';
import StockStats from '@/components/stockstats/StockStats';

function Dashboard() {
  const API_KEY =  'demo' //'OTGL48VF2QBKDZSK''NF6LXRYWSZLD6W5D'
  let stockSymbols = ['IBM']
  const[stocks,setStocks] = useState([])
  const[tickerStock,setTickerStock] = useState([])

  // Buy/Sell  modal hook
  const [buyPower,setBuyPower] = useState(1000)
  const[openBuyModal,setBuyModal] = useState(false)
  const[openSellModal,setSellModal] = useState(false)
=======
"use client";
import Buy from "@/components/buy/Buy";
import StockGraph from "@/components/stockgraph/StockGraph";
import StockList from "@/components/stocklist/StockList";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Sell from "@/components/sell/Sell";
import TimeRange from "@/components/timerange/TimeRange";

function Dashboard() {
  const API_KEY = "NF6LXRYWSZLD6W5D";
  let stockSymbols = ["IBM"];
  const [stocks, setStocks] = useState([]);
  const [tickerStock, setTickerStock] = useState([]);

  const [openBuyModal, setBuyModal] = useState(false);
  const [openSellModal, setSellModal] = useState(false);
>>>>>>> main

  const [stockChartXValues, setStockChartXValues] = useState([]);
  const [stockChartYValues, setStockChartYValues] = useState([]);

<<<<<<< HEAD
=======
  // Buy modal hook
  const buyPower = 1000;
  const [shareNumber, setShareNumber] = useState(0);

  // Sell modal hook
  const [dollarAmount, setDollarAmount] = useState(0);

>>>>>>> main
  let current = new Date();
  let cDate =
    current.getFullYear() +
    "-" +
    (current.getMonth() + 1) +
    "-" +
    current.getDate();
  let endTime = cDate;
<<<<<<< HEAD
  cDate = current.getFullYear() + '-' + (current.getMonth()+1) + '-' + (current.getDate()-1);
  let startTime = cDate;

  const[timeOption,setTimeOption] = useState([startTime,endTime])

  useEffect(() => {
    const fetchStocks = async (symbol:string) => {
      try{
        const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`);
        const data = await response.json();
        console.log(data)
        const stockItem = {
          symbol:	data['Global Quote']['01. symbol'],
          open:	data['Global Quote']['02. open'],
          high: data['Global Quote']['03. high'],
          low:  data['Global Quote']['04. low'],
          price: data['Global Quote']['05. price'],
          volume:	data['Global Quote']['06. volume'],
          change:	data['Global Quote']['09. change'],
          change_percent:	data['Global Quote']['10. change_percent'],
          shares_owned: 0
        }
        return stockItem

        }catch(err:any){
          console.log(err.stack)
        }
      }
      let stockList:any = [];
      stockSymbols.forEach(symbol => stockList.push(fetchStocks(symbol)));

        Promise.all(stockList).then((results:any) => {
          console.log(results)
          setStocks(results)
          setTickerStock(results[0])
        }).catch((err) => {
            console.log(err);
        });
    }, [])
  
    useEffect(() => {
      fetchStock();
    }, [tickerStock]);

    const fetchStock = async () => {
      try {
        const API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbols[0]}&interval=5min&outputsize=full&apikey=${API_KEY}`;
  
        const stockChartXValuesFunction = [];
        const stockChartYValuesFunction = [];
  
        const response = await fetch(API_Call);
  
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
  
        const data = await response.json();
  
        for (let key in data['Time Series (5min)']) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(data['Time Series (5min)'][key]['1. open']);
        }
  
        setStockChartXValues(stockChartXValuesFunction);
        setStockChartYValues(stockChartYValuesFunction);
      } catch (error) {
        console.error('Error fetching stock data:', error);
=======
  let startTime = "";
  cDate =
    current.getFullYear() +
    "-" +
    (current.getMonth() + 1) +
    "-" +
    (current.getDate() - 1);
  startTime = cDate;

  const [timeOption, setTimeOption] = useState([startTime, endTime]);

  useEffect(() => {
    fetchStock();
  }, []);

  const fetchStock = async () => {
    try {
      const API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbols[0]}&interval=5min&outputsize=full&apikey=demo`;

      const stockChartXValuesFunction = [];
      const stockChartYValuesFunction = [];

      const response = await fetch(API_Call);

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
>>>>>>> main
      }

      const data = await response.json();

      for (let key in data["Time Series (5min)"]) {
        stockChartXValuesFunction.push(key);
        stockChartYValuesFunction.push(
          data["Time Series (5min)"][key]["1. open"]
        );
      }

      setStockChartXValues(stockChartXValuesFunction);
      setStockChartYValues(stockChartYValuesFunction);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
<<<<<<< HEAD
    else if(option === '1W')
    {
      cDate = current.getFullYear() + '-' + (current.getMonth()+1) + '-' + (current.getDate()-6);
      startTime = cDate;
      setTimeOption(['2023-10-31',endTime])
    }
    else if(option === '1M')
    {
      cDate = current.getFullYear() + '-' + current.getMonth() + '-' + current.getDate();
=======
  };

  function selectTimeOption(option) {
    if (option === "1D") {
      cDate =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        (current.getDate() - 1);
      startTime = cDate;
      setTimeOption([startTime, endTime]);
    } else if (option === "1W") {
      cDate =
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        (current.getDate() - 7);
>>>>>>> main
      startTime = cDate;
      setTimeOption([startTime, endTime]);
    } else if (option === "1M") {
      cDate =
        current.getFullYear() +
        "-" +
        current.getMonth() +
        "-" +
        current.getDate();
      startTime = cDate;
      setTimeOption([startTime, endTime]);
    } else if (option === "3M") {
      cDate =
        current.getFullYear() +
        "-" +
        (current.getMonth() - 2) +
        "-" +
        current.getDate();
      startTime = cDate;
      setTimeOption([startTime, endTime]);
    }
  }
<<<<<<< HEAD
  return (
    <>
      <StockList stocks = {stocks} setTickerStock ={setTickerStock}/>
      <StockGraph stockChartXValues ={stockChartXValues} stockChartYValues ={stockChartYValues}
      timeOption={timeOption}  title = {tickerStock.symbol} price = {tickerStock.price}    
=======

  useEffect(() => {
    const fetchStocks = async (symbol: string) => {
      try {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=demo`
        );
        const data = await response.json();
        const stockItem = {
          symbol: data["Global Quote"]["01. symbol"],
          open: data["Global Quote"]["02. open"],
          high: data["Global Quote"]["03. high"],
          low: data["Global Quote"]["04. low"],
          price: data["Global Quote"]["05. price"],
          volume: data["Global Quote"]["06. volume"],
          change: data["Global Quote"]["09. change"],
          change_percent: data["Global Quote"]["10. change_percent"],
          shares_owned: 20,
        };
        return stockItem;
      } catch (err: any) {
        console.log(err.stack);
      }
    };
    let stockList: any = [];
    stockSymbols.forEach((symbol) => stockList.push(fetchStocks(symbol)));

    Promise.all(stockList)
      .then((results: any) => {
        console.log(results);
        setStocks(results);
        setTickerStock(results[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <StockList stocks={stocks} />
      <StockGraph
        stockChartXValues={stockChartXValues}
        stockChartYValues={stockChartYValues}
        timeOption={timeOption}
        title={tickerStock.symbol}
        price={tickerStock.price}
>>>>>>> main
      />
      <TimeRange selectTimeOption={selectTimeOption} />
      <button
<<<<<<< HEAD
      className={styles.stock_sell}
      onClick={()=>{
        setSellModal(true)
      }}
      disabled= {!(tickerStock.shares_owned)}
      >
        Sell
      </button>
      <StockStats stock ={tickerStock}/>
      {openBuyModal && <Buy closeModal={setBuyModal} stock = {tickerStock} buyPower={buyPower} setBuyPower={setBuyPower}/>}
      {openSellModal && <Sell closeModal={setSellModal} stock = {tickerStock} buyPower = {buyPower} setBuyPower={setBuyPower}/>}
=======
        className={styles.stock_buy}
        onClick={() => {
          setBuyModal(true);
        }}
      >
        {" "}
        Buy{" "}
      </button>
      <button
        className={styles.stock_sell}
        onClick={() => {
          setSellModal(true);
        }}
      >
        Sell
      </button>
      {openBuyModal && (
        <Buy
          closeModal={setBuyModal}
          price={tickerStock.price}
          buyPower={buyPower}
          shareNumber={shareNumber}
          setShareNumber={setShareNumber}
        />
      )}
      {openSellModal && (
        <Sell
          closeModal={setSellModal}
          price={tickerStock.price}
          ownedShare={tickerStock.shares_owned}
          dollarAmount={dollarAmount}
          setDollarAmount={setDollarAmount}
        />
      )}
>>>>>>> main
    </>
  );
}

export default Dashboard;
