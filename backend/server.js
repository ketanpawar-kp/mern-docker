const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 9000;

mongoose.connect("mongodb://mongo:27017/slack_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

const User = mongoose.model("User", new mongoose.Schema({
  email: String,
  password: String,
  image: String
}));

const Room = mongoose.model("Room", new mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: Date.now }
}));

const Message = mongoose.model("Message", new mongoose.Schema({
  room: String,
  user: String,
  text: String,
  timestamp: { type: Date, default: Date.now }
}));

app.post("/register", async (req, res) => {
  const existing = await User.findOne({ email: req.body.email });
  if (existing) return res.status(400).json({ message: "User already exists" });
  const user = await User.create(req.body);
  res.json(user);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });
  res.json(user);
});

app.post("/rooms", async (req, res) => {
  const room = await Room.create({ name: req.body.name });
  res.json(room);
});

app.get("/rooms", async (req, res) => {
  const rooms = await Room.find({});
  res.json(rooms);
});

app.post("/messages", async (req, res) => {
  const message = await Message.create(req.body);
  res.json(message);
});

app.get("/messages/:room", async (req, res) => {
  const messages = await Message.find({ room: req.params.room });
  res.json(messages);
});


app.listen(PORT, () => console.log(`🚀 Backend running at http://localhost:${PORT}`));

