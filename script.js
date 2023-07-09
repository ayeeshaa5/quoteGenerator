// Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The best way to predict the future is to create it. - Peter Drucker",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The harder I work, the luckier I get. - Samuel Goldwyn",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The best revenge is massive success. - Frank Sinatra",
    "The two most important days in your life are the day you are born and the day you find out why. - Mark Twain",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Do not wait for leaders; do it alone, person to person. - Mother Teresa"
    
  ];
  
  
  // Function to generate and display a random quote
  function generateRandomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.textContent = quotes[randomNumber];
  }
  
  // Event listener for the button click
  const quoteButton = document.getElementById("quoteButton");
  quoteButton.addEventListener("click", generateRandomQuote);
  
  // Generate a random quote when the page loads
  generateRandomQuote();
  