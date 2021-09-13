let paragrafos=[
  'The secret to life is to love who you are.',
  'Look for opportunities in every change in your life.',
  'Persist while others are quitting.',
  'Creio no riso e nas lágrimas como antídotos contra o ódio e o terror.',
  'Seja como for o que penses, creio que é melhor dizê-lo com boas palavras.',
  'Eu acredito no amor. Eu creio que pode existir alguma chance e eu sempre acho que pode ser diferente. Talvez essa seja a explicação de todas decepções.',
  'Não creio, no sentido filosófico do termo, na liberdade do homem. Todos agem não apenas sob um constrangimento exterior mas também de acordo com uma necessidade interior.',
  'Eu creio que um dos princípios essenciais da sabedoria é o de se abster das ameaças verbais ou insultos.'
  ];

  const paragrafo = document.querySelector(".box__paragrafo");
  const button = document.querySelector(".box__button");
  console.log(paragrafo)

  button.addEventListener("click", citar);

  function citar() {
    let index=Math.floor(Math.random()*paragrafos.length);

    let citacao =`<p>${paragrafos[index]}</p>`;

    paragrafo.innerHTML= citacao;
  }