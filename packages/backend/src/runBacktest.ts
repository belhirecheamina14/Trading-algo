import { Backtester } from './backtesting/Backtester.js';

const historicalData = [
  { price: 100, movingAverage: 98, priceChange: 1, volatility: 0.2, trendStrength: 0.8, spread: -0.5, high: 101, low: 99, close: 100, volume: 1000, time: new Date(), premarket: false, bos: false, ifvg: false, smt: false, extension: 0.5, eq: false, fvg: false },
  { price: 102, movingAverage: 99, priceChange: 2, volatility: 0.25, trendStrength: 0.85, spread: -0.4, high: 103, low: 101, close: 102, volume: 1200, time: new Date(), premarket: false, bos: true, ifvg: false, smt: false, extension: 0.8, eq: false, fvg: true },
  { price: 101, movingAverage: 100, priceChange: -1, volatility: 0.22, trendStrength: 0.75, spread: 0.2, high: 102, low: 100, close: 101, volume: 800, time: new Date(), premarket: true, bos: false, ifvg: true, smt: true, extension: 0.7, eq: true, fvg: false },
  { price: 99, movingAverage: 101, priceChange: -2, volatility: 0.35, trendStrength: 0.6, spread: 0.5, high: 100, low: 98, close: 99, volume: 1500, time: new Date(), premarket: false, bos: false, ifvg: false, smt: false, extension: 0.4, eq: false, fvg: false },
  { price: 100, movingAverage: 100, priceChange: 1, volatility: 0.3, trendStrength: 0.65, spread: 0.1, high: 106, low: 99, close: 100, volume: 1100, time: new Date(), premarket: false, bos: true, ifvg: true, smt: true, extension: 0.9, eq: true, fvg: true },
];

const backtester = new Backtester();
const results = backtester.run(historicalData);

console.log(results);
