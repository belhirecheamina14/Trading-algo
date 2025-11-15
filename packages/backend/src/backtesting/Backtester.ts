import { HybridSystem } from '../system/HybridSystem.js';

export class Backtester {
  private hybridSystem: HybridSystem;

  constructor() {
    this.hybridSystem = new HybridSystem();
  }

  run(historicalData: any[]) {
    const results = [];
    for (const dataPoint of historicalData) {
      const result = this.hybridSystem.trade(dataPoint);
      results.push(result);
    }
    return results;
  }
}
