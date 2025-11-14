import { Backtester } from './backtesting/Backtester.js';

const historicalData = [
  { price: 100, movingAverage: 98, priceChange: 1, volatility: 0.2, trendStrength: 0.8, spread: -0.5 },
  { price: 102, movingAverage: 99, priceChange: 2, volatility: 0.25, trendStrength: 0.85, spread: -0.4 },
  { price: 101, movingAverage: 100, priceChange: -1, volatility: 0.22, trendStrength: 0.75, spread: 0.2 },
  { price: 99, movingAverage: 101, priceChange: -2, volatility: 0.35, trendStrength: 0.6, spread: 0.5 },
  { price: 100, movingAverage: 100, priceChange: 1, volatility: 0.3, trendStrength: 0.65, spread: 0.1 },
];

const backtester = new Backtester();
const results = backtester.run(historicalData);

console.log(results);
