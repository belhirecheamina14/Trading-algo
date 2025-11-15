import { MeanReversion } from '../strategies/MeanReversion.js';
import { Momentum } from '../strategies/Momentum.js';
import { StatisticalArbitrage } from '../strategies/StatisticalArbitrage.js';
import { EmergentIntelligence } from '../orchestrator/EmergentIntelligence.js';

export class HybridSystem {
  private meanReversion: MeanReversion;
  private momentum: Momentum;
  private statArb: StatisticalArbitrage;
  private orchestrator: EmergentIntelligence;

  constructor() {
    this.meanReversion = new MeanReversion();
    this.momentum = new Momentum();
    this.statArb = new StatisticalArbitrage();
    this.orchestrator = new EmergentIntelligence([
      'regime_detection',
      'risk_mgmt',
      'allocation',
    ]);
  }

  trade(marketData: any) {
    const regime = this.orchestrator.detectRegime(marketData);
    const signals = {
      mr: this.meanReversion.signal(marketData),
      mom: this.momentum.signal(marketData),
      arb: this.statArb.signal(marketData),
    };
    const allocations = this.orchestrator.allocate(signals, regime);
    return this.orchestrator.execute(allocations);
  }
}
