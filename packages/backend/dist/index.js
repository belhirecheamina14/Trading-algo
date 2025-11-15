import express from 'express';
import cors from 'cors';
import { HybridSystem } from './system/HybridSystem.js';
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
const hybridSystem = new HybridSystem();
let isLive = false;
app.get('/api/status', (req, res) => {
    res.json({ isLive });
});
app.post('/api/toggle-live', (req, res) => {
    isLive = !isLive;
    res.json({ isLive });
});
app.post('/api/trade', (req, res) => {
    if (!isLive) {
        return res.status(400).json({ error: 'System is not live' });
    }
    const marketData = req.body;
    const result = hybridSystem.trade(marketData);
    res.json(result);
});
// Placeholders for training endpoints
app.post('/api/train/strategy/:strategyId', (req, res) => {
    res.json({ message: `Training for strategy ${req.params.strategyId} started.` });
});
app.post('/api/train/orchestrator', (req, res) => {
    res.json({ message: 'Orchestrator training started.' });
});
app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map