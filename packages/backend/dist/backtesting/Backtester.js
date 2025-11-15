import { HybridSystem } from '../system/HybridSystem.js';
export class Backtester {
    hybridSystem;
    constructor() {
        this.hybridSystem = new HybridSystem();
    }
    run(historicalData) {
        const results = [];
        for (const dataPoint of historicalData) {
            const result = this.hybridSystem.trade(dataPoint);
            results.push(result);
        }
        return results;
    }
}
//# sourceMappingURL=Backtester.js.map