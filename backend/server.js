const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let crops = [
    { id: "1", crop: "Wheat", variety: "HD 2967", sowingDate: "2025-11-12", expectedHarvest: "2026-04-15", readiness: 85, status: "Good" },
    { id: "2", crop: "Maize", variety: "HQPM-1", sowingDate: "2025-07-20", expectedHarvest: "2025-11-25", readiness: 40, status: "Needs Attention" }
];

app.get('/api/crops', (req, res) => res.json(crops));

app.get('/api/crops/search', (req, res) => {
    const status = req.query.status;
    res.json(crops.filter(c => c.status === status));
});

app.get('/api/crops/:id', (req, res) => {
    const crop = crops.find(c => c.id === req.params.id);
    crop ? res.json(crop) : res.status(404).json({ error: "Crop not found" });
});

app.post('/api/crops', (req, res) => {
    const newCrop = { ...req.body, id: Date.now().toString() };
    crops.push(newCrop);
    res.status(201).json(newCrop);
});

app.put('/api/crops/:id', (req, res) => {
    const index = crops.findIndex(c => c.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: "Crop not found" });
    crops[index] = { ...crops[index], ...req.body };
    res.json(crops[index]);
});

app.delete('/api/crops/:id', (req, res) => {
    const initialLength = crops.length;
    crops = crops.filter(c => c.id !== req.params.id);
    crops.length === initialLength ? res.status(404).json({ error: "Crop not found" }) : res.status(204).send();
});

app.listen(5000, () => console.log("Server running on port 5000"));