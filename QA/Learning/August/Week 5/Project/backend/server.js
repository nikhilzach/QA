const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());


app.use(bodyParser.json());

app.post('/run-automation', (req, res) => {
  const { path: testFolderPath } = req.body; // Receive path from the request body

  const command = `cd ${testFolderPath} && npm run wdio`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).json({ error: stderr });
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return res.status(500).json({ error: stderr });
    }
    console.log(`stdout: ${stdout}`);
    res.json({ result: stdout });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
