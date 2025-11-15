import { DeepExpert } from './DeepExpert.js';
export class MeanReversion extends DeepExpert {
    constructor() {
        super('mean_reversion');
    }
    signal(marketData) {
        // In a real-world scenario, this method would contain the logic
        // for a mean reversion strategy. For this example, we'll use a
        // simplified logic.
        const price = marketData.price;
        const movingAverage = marketData.movingAverage;
        if (price < movingAverage) {
            return { action: 'buy', confidence: 0.7 };
        }
        else {
            return { action: 'sell', confidence: 0.7 };
        }
    }
}
//# sourceMappingURL=MeanReversion.js.map