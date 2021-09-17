const paragrafo = document.querySelector(".box__paragrafo");
const button = document.querySelector(".box__button");
console.log(paragrafo);

fetch("data.json")
  .then((resp) => resp.json())
  .then((json) => {
    const quotes = json.quotes;
    const quotesLength = json.quotes.length;

    button.addEventListener("click", citar);

    function citar() {
      let index = Math.floor(Math.random() * quotesLength);

      let citacao = `<p>${quotes[index].quote}</p>`;

      paragrafo.innerHTML = citacao;
    }
  });
