const quotes = {
    mateus: [
      "Bem-aventurados os que têm fome e sede de justiça, porque serão saciados.",
      "Portanto, tudo o que quereis que os homens vos façam, fazei-lho também vós a eles.",
      "Não ajunteis tesouros na terra, mas no céu."
    ],
    marcos: [
      "Vinde após mim, e eu vos farei pescadores de homens.",
      "Pois que aproveita ao homem ganhar o mundo inteiro e perder a sua alma?",
      "Aquele que não é comigo é contra mim."
    ],
    lucas: [
      "Amai os vossos inimigos, fazei o bem aos que vos odeiam.",
      "Porque todo aquele que se exalta será humilhado, e o que se humilha será exaltado.",
      "Onde estiver o vosso tesouro, aí estará também o vosso coração."
    ],
    joao: [
      "Eu sou o caminho, a verdade e a vida.",
      "Ninguém vem ao Pai senão por mim.",
      "Amai-vos uns aos outros como eu vos amei."
    ]
  };
  
  function addQuoteListener(buttonId, quoteId, quotesArray) {
    document.getElementById(buttonId).addEventListener('click', () => {
      const quoteElement = document.getElementById(quoteId);
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * quotesArray.length);
      } while(quotesArray[randomIndex] === quoteElement.textContent);
      quoteElement.textContent = quotesArray[randomIndex];
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    addQuoteListener('btn-mateus', 'mateus-quote', quotes.mateus);
    addQuoteListener('btn-marcos', 'marcos-quote', quotes.marcos);
    addQuoteListener('btn-lucas', 'lucas-quote', quotes.lucas);
    addQuoteListener('btn-joao', 'joao-quote', quotes.joao);
  });
  