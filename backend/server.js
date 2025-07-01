const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const weatherData = require('./routes/weather');
const emissions = require('./routes/emissions');
const users = require('./routes/users');
const ledger = require('./routes/ledger');
const claims = require('./routes/claims');
const reports = require('./routes/reports');

app.use('/api/weather', weatherData);
app.use('/api/emissions', emissions);
app.use('/api/users', users);
app.use('/api/ledger', ledger);
app.use('/api/claims', claims);
app.use('/api/reports', reports);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
