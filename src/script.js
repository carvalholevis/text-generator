const quotes = [
    {
      quote: "A persistência é o caminho do êxito.",
      author: "Charles Chaplin",
    },
    {
      quote: "A única forma de fazer um grande trabalho é amar o que se faz.",
      author: "Steve Jobs",
    },
    {
      quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      author: "Robert Collier",
    },
    {
      quote:
        "O fracasso é a oportunidade de começar de novo, com mais experiência.",
      author: "Henry Ford",
    },
    {
      quote: "Não espere por oportunidades, crie você mesmo as suas.",
      author: "Autor desconhecido",
    },
    {
      quote:
        "O verdadeiro sucesso não é o sucesso financeiro, mas sim o sucesso em ajudar outras pessoas.",
      author: "Zig Ziglar",
    },
    {
      quote:
        "O sucesso não é final, o fracasso não é fatal: o que importa é ter coragem para continuar.",
      author: "Winston Churchill",
    },
    {
      quote:
        "O sucesso consiste em ir de fracasso em fracasso sem perder o entusiasmo.",
      author: "Winston Churchill",
    },
    {
      quote: "Acredite em si próprio e todo o resto virá naturalmente.",
      author: "Elon Musk",
    },
    {
      quote:
        "O fracasso não significa que você não seja bom o suficiente, significa que você precisa se esforçar mais.",
      author: "Autor desconhecido",
    },
  ];

const quoteBtn = document.querySelector("#quoteBtn")
const quoteTxt = document.querySelector(".text")
const quoteAuthor = document.querySelector(".author")

//mudar botão e add uma das frases do array 
function getQuote() {
    //O MATH FLOOR FEZ A MULTPLICAÇÃO SER ARREDONDADA (INVESTIGAR SE FOI ARREDONDADO OU CORTARAM OS NUMEROS DECIMAIS)
    const index = Math.floor(Math.random() * quotes.length)


    // acessando as propriedades dos elementos do array 
    quoteTxt.textContent = quotes[index].quote
    quoteAuthor.textContent = quotes[index].author
    console.log(index)
}

//ISSAQUI FAZ O BOTÃO CHAMAR A FUNÇÃO PARA SER EXECUTADA
quoteBtn.addEventListener("click", getQuote)