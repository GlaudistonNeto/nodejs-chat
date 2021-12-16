const express  = require('express');
const cors  = require('cors');
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1312185",
  key: "068133b23cfaf634458b",
  secret: "3f8506aa40993bedbf63",
  cluster: "us3",
  useTLS: true
});

const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:8080']
}))

app.use(express.json());

app.post('/api/messages', async (req, res) => {
  await pusher.trigger("chat", "message", {
    username: req.body.username,
    message: req.body.message
  });

  res.json([]);
});

app.listen(3333);
console.log('linstening to port 3333');
