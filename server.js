const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if(username === 'admin' && password === '1234'){
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.get('/services', (req, res) => {
  res.json([
    { id: 1, name: 'Printing Design' },
    { id: 2, name: 'Digital Marketing' },
    { id: 3, name: 'Brand Identity' }
  ]);
});

app.listen(5000, () => console.log('Server running on port 5000'));
