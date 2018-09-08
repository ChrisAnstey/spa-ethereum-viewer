const express = require('express')
const cors = require('cors')
const moment = require('moment')

const app = express()

// allow our frontend to access the API
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// an initial demo endpoint to return some demo data
var demoBlocks = [{id: 123, name: "Latest Block"},{id: 122, name: "Previous Block"},{id: 121, name: "Older Block"}]
app.get('/', (req, res) => res.send(JSON.stringify(demoBlocks)));
app.get(
  '/blocks/:block',
  (req, res) => {
    block = demoBlocks.find(o => o.id == req.params.block)
    block.date = moment().format('MMMM Do YYYY, h:mm:ss a')
    res.send(JSON.stringify(block))
  }
);

app.listen(4000, () => console.log(`Express server running on port 4000`));
