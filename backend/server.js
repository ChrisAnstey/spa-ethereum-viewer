const express = require('express')
const cors = require('cors')

const app = express();

// allow our frontend to access the API
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// an initial demo endpoint to return some demo data
var demoBlocks = [{id: 123, name: "Latest Block"},{id: 122, name: "Previous Block"}]
app.get('/', (req, res) => res.send(JSON.stringify(demoBlocks)));

app.listen(4000, () => console.log(`Express server running on port 4000`));
