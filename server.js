require('dotenv').config();  // Load environment variables
const express = require('express');
const cors = require('cors');

// Initialize Express
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Chatbot API Endpoint
app.post('/api/chat', (req, res) => {
  const { message } = req.body;

  let botReply = "Sorry, I didn't understand that.";

  // Check if the message contains specific keywords and respond accordingly
  if (message.toLowerCase().includes("hello")) {
    botReply = "Hello! How can I help you today?";
  } else if (message.toLowerCase().includes("how are you")) {
    botReply = "I'm doing great, thank you for asking! How about you?";
  } else if (message.toLowerCase().includes("bye")) {
    botReply = "Goodbye! Have a great day!";
  } else if (message.toLowerCase().includes("what is your name")) {
    botReply = "I am your friendly chatbot, here to assist you!";
  } else if (message.toLowerCase().includes("help")) {
    botReply = "I'm here to help! You can ask me about the weather, time, or just chat with me!";
  } else if (message.toLowerCase().includes("weather")) {
    botReply = "I can provide weather updates. Could you please specify the location?";
  } else if (message.toLowerCase().includes("time")) {
    const currentTime = new Date().toLocaleTimeString();
    botReply = `The current time is ${currentTime}.`;
  } else if (message.toLowerCase().includes("joke")) {
    botReply = "Why don't scientists trust atoms? Because they make up everything!";
  } else if (message.toLowerCase().includes("reminder")) {
    botReply = "I can help you set reminders! Just let me know what to remind you of.";
  } else if (message.toLowerCase().includes("news")) {
    botReply = "I can give you the latest news. Could you specify the topic you're interested in?";
  } else if (message.toLowerCase().includes("quote")) {
    botReply = "Here's a motivational quote: 'The only way to do great work is to love what you do.' - Steve Jobs";
  } else {
    botReply = "I'm sorry, I didn't quite get that. Can you please rephrase?";
  }

  res.json({ reply: botReply });
});

// Start server
app.listen(port, () => {
  console.log(`Chatbot backend running at http://localhost:${port}`);
});
