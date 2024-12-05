document.addEventListener("DOMContentLoaded", () => {
  const chatbotContainer = document.getElementById("chatbot-container");

  // Initialize Chatbot
  const chatbotHTML = `
    <div class="chatbot">
      <div class="chatbot-header">Chatbot</div>
      <div class="chatbot-body" id="chatbot-body"></div>
      <div class="chatbot-footer">
        <input type="text" id="chatbot-input" placeholder="Type your message...">
        <button id="chatbot-send">Send</button>
        <button id="voice-button">🎤</button>
      </div>
    </div>
  `;
  chatbotContainer.innerHTML = chatbotHTML;

  // Event listeners
  const input = document.getElementById("chatbot-input");
  const sendButton = document.getElementById("chatbot-send");
  const voiceButton = document.getElementById("voice-button");
  const body = document.getElementById("chatbot-body");

  sendButton.addEventListener("click", sendMessage);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  voiceButton.addEventListener("click", startVoiceRecognition);

  // Send text message
  function sendMessage() {
    const userMessage = input.value.trim();
    if (!userMessage) return;

    displayMessage(userMessage, "right");
    input.value = "";
    fetchBotResponse(userMessage);
  }

  // Display message
  function displayMessage(message, alignment) {
    const messageBubble = document.createElement("div");
    messageBubble.textContent = message;
    messageBubble.style.textAlign = alignment;
    body.appendChild(messageBubble);
    body.scrollTop = body.scrollHeight; // Scroll to the bottom
  }

  // Simple pre-defined responses for chatbot
  function fetchBotResponse(message) {
    let botReply = "Sorry, I didn't understand that.";
  
    // Greetings and casual slang
    if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hii")) {
      botReply = "Hii! How's it going? How can I assist you today?";
    } else if (message.toLowerCase().includes("bro") || message.toLowerCase().includes("macha") || message.toLowerCase().includes("brother")) {
      botReply = "Macha! What’s up, yaar? How can I help you?";
    } else if (message.toLowerCase().includes("sister") || message.toLowerCase().includes("akka")) {
      botReply = "Akka, how are you doing? What can I do for you, hosa kanna?";  // 'Hosa kanna' means new/fresh face
    } else if (message.toLowerCase().includes("appa")) {
      botReply = "Appa! What's going on? How can I assist you today, Idu appa?";  // 'Idu appa' is a fun local way of emphasizing.
    } else if (message.toLowerCase().includes("amma")) {
      botReply = "Amma, I’m here! What can I do for you? Channagidhe?";  // 'Channagidhe?' means 'Are you fine?'
    } else if (message.toLowerCase().includes("dummy")) {
      botReply = "Dummy? Naanu dummy alla, macha!";  // "I'm not dummy, bro!"
    } else if (message.toLowerCase().includes("bolemaga")) {
      botReply = "Bolemaga! Neenu confuse maadidira, illa?";  // 'Neenu confuse maadidira' means "Did you confuse me?"
    } else if (message.toLowerCase().includes("how are you")) {
      botReply = "I’m doing great, bro! Naanu chennagiddini! How about you?";  // "Naanu chennagiddini" means "I'm doing well."
    } else if (message.toLowerCase().includes("bye")) {
      botReply = "Goodbye, take care, bro! Hosa dina aramagi irali!";  // "Have a peaceful day ahead."
    } else if (message.toLowerCase().includes("what is your name")) {
      botReply = "I’m your friendly chatbot, ready to help you anytime! Naanu thumba bagge help maadthini!";
    } else if (message.toLowerCase().includes("help")) {
      botReply = "Need some help, bro? Naale madli nodthini!";  // "Naale madli nodthini" means "Will try again tomorrow"
    } else if (message.toLowerCase().includes("weather")) {
      botReply = "I can give you weather updates, bro! Yelli beku heli, I’ll check it for you.";  // "Where do you need it?"
    } else if (message.toLowerCase().includes("time")) {
      const currentTime = new Date().toLocaleTimeString();
      botReply = `The time right now is ${currentTime}, macha.`; 
    } else if (message.toLowerCase().includes("joke")) {
      botReply = "Why don't scientists trust atoms? Because they make up everything! Hahaha! Sari, joke ge kanu madla!";
    } else if (message.toLowerCase().includes("what's up")) {
      botReply = "Nothing much, bro! Just here to chat. Enu sadha neenu?";  // "What’s new with you?"
    } else if (message.toLowerCase().includes("chill")) {
      botReply = "Chill, bro! Idu sukhada iruve. Chill madi!";  // "Everything will be fine, relax!"
    } else if (message.toLowerCase().includes("macha how")) {
      botReply = "Macha, elli maadi iddira? Hosa hodhira?";  // "What’s up, bro? Doing well?"
    } else if (message.toLowerCase().includes("good morning")) {
      botReply = "Good morning, bro! Naale jeevana kodi, aarambha thumba chennagide!";
    } else if (message.toLowerCase().includes("good night")) {
      botReply = "Good night, macha! Nidra melu thambi!";  // "Sleep well, little bro!"
    } else if (message.toLowerCase().includes("thank you") || message.toLowerCase().includes("thanks")) {
      botReply = "You're welcome, bro! Hosa jeevana mundhe hogi!";
    } else if (message.toLowerCase().includes("where are you from")) {
      botReply = "I’m from the virtual world, macha! Digital jagathdalli sadhane maadthini!";
    } else if (message.toLowerCase().includes("birthday")) {
      botReply = "Happy Birthday, bro! Yeladu nanage, neenu togi bega hondi!";
  
    // Professional and polite responses
    } else if (message.toLowerCase().includes("good morning professional")) {
      botReply = "Good morning, sir/madam. How may I assist you today?";
    } else if (message.toLowerCase().includes("good evening")) {
      botReply = "Good evening, sir/madam. How can I be of service to you today?";
    } else if (message.toLowerCase().includes("how are you professional")) {
      botReply = "I am functioning well, thank you for asking. How are you today, sir/madam?";
    } else if (message.toLowerCase().includes("thank you professional")) {
      botReply = "You're most welcome, sir/madam. It’s my pleasure to assist you.";
    } else if (message.toLowerCase().includes("help professional")) {
      botReply = "Certainly! How can I assist you today, sir/madam? Please feel free to ask your queries.";
    } else if (message.toLowerCase().includes("weather professional")) {
      botReply = "I can provide you with the latest weather updates. Could you kindly provide your location?";
    } else if (message.toLowerCase().includes("time professional")) {
      const currentTime = new Date().toLocaleTimeString();
      botReply = `The current time is ${currentTime}, sir/madam.`;
    } else if (message.toLowerCase().includes("joke professional")) {
      botReply = "Here’s a light-hearted joke: Why don’t scientists trust atoms? Because they make up everything!";
    } else if (message.toLowerCase().includes("bye professional")) {
      botReply = "Goodbye, sir/madam. Thank you for your time. Have a great day ahead.";
    } else if (message.toLowerCase().includes("what is your name professional")) {
      botReply = "I am your assistant chatbot, designed to help you with your queries.";
    }
  
    // Send bot reply
    displayMessage(botReply, "left");
    speak(botReply);  // Make the bot speak
  }
  
  

    

  // Voice recognition setup
  function startVoiceRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "En-IN";

    recognition.onstart = () => {
      displayMessage("Listening...", "left");
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      displayMessage(`You said: ${transcript}`, "right");
      fetchBotResponse(transcript);
    };

    recognition.onend = () => {
    // Optionally, you can display a message here when the listening ends
    displayMessage("Listening ended.", "left");
  };

    recognition.onerror = (event) => {
      displayMessage(`Error: ${event.error}`, "left");
    };

    recognition.start();
  }

  // Function to speak bot's response using speech synthesis (in Kannada)
  function speak(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "kn-IN";  // Kannada language
    speechSynthesis.speak(utterance);
  }
});
