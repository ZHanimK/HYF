const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'I received your GET request.' });
});

const data=[
  {
    id:1,
    title: "learn react",
    done: false
  },
  {
    id:2,
    title: "do the dishes",
    done: true
  }
]

app.get('/api/todoItems', (req, res) => {
  console.log(req.query)
  res.status(200).send(data)
  // console.log(req.body);
  // res.send(
  //   `I received your POST request. Hello: ${req.body.post}`,
  // );
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
