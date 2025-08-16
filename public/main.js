const quotes = [
  "“Ave Maria, cheia de graça, o Senhor é contigo.”",
  "“Bendita sois vós entre as mulheres.”",
  "“Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora de nossa morte.”",
  "“Maria, estrela do mar, guiai-nos sempre no caminho da fé.”",
  "“Mãe de misericórdia, intercede por nós junto ao Pai.”"
];

function newQuote() {
  const quoteElement = document.getElementById('quote');
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while(quotes[randomIndex] === quoteElement.textContent);
  quoteElement.textContent = quotes[randomIndex];
}

// Aguarda o DOM carregar antes de adicionar o listener
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('newQuoteBtn').addEventListener('click', newQuote);
});