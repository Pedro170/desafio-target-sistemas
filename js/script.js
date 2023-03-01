/* Exercício 1 */
const elementSoma = document.getElementById("soma");
let indice = 13,
  soma = 0,
  k = 0;

while (k < indice) {
  k += 1;
  soma += +k;
}

elementSoma.innerHTML += soma;

/* Exercício 2 */

function exercicio2() {
  const input = document.querySelector("#fibonacci");
  const form = document.querySelector("#questao2 form");
  const frase = document.querySelector(".frase");
  frase.innerHTML = ""
  if (input) {
    const handleSubmit = (event) => {
      event.preventDefault();
      let inputValue = +input.value;
      let num1 = 1,
        num2 = 0;

      // Estou limitando o número que vem do input
      if (inputValue > 100) {
        inputValue = 10;
        // form.innerHTML += `<p>O valor máximo permitido é 100</p>`
      }

      for (let i = 0; i < inputValue; i++) {
        num1 = num1 + num2;
        num2 = num1 - num2;
        frase.innerHTML += `<span>${num1},</span>`;
      }
    };
    form.addEventListener("submit", handleSubmit);
  }
  frase.innerHTML += `
    <span>0,</span>
    <span>1,</span>
  `;
}
exercicio2();

/* Exercício 3 */

const exercicio3 = async () => {
  const table = document.querySelector("#questao3 table");
  const menor = document.getElementById("menor");
  const maior = document.getElementById("maior");
  const fatMens = document.getElementById("fat-mens");

  const response = await fetch(`dados.json`);
  const json = await response.json();

  // const valores = json.filter((item) => item.valor !== 0);

  // const maiorValor = json.reduce((acc, cur) =>
  //   acc.valor > cur.valor ? acc : cur
  // );
  // const menorValor = valores.reduce((acc, cur) =>
  //   acc.valor < cur.valor ? acc : cur
  // );

  const dia = json.map((item) => item.valor);
  const valores = dia.filter((item) => item !== 0);

  const num = 0;
  const valor = valores.reduce((acc, cur) => acc + cur, num);
  const media = +(valor / 22).toFixed(2);

  const numeros = json.filter((item) => item.valor > media);
  const somaDias = numeros.map((item) => item.dia);

  if (json) {
    // maior.innerHTML += `<span class="valor">${maiorValor}</span>`;
    // menor.innerHTML += `<span class="valor">${menorValor.valor}</span>`;

    maior.innerHTML += `<span class="valor">R$ ${Math.max(...dia)}.</span>`;
    menor.innerHTML += `<span class="valor">R$ ${Math.min(...valores)}.</span>`;
    fatMens.innerHTML += `<span class="valor">${somaDias.length} dias.</span>`;
    json.map((item, idx) => {
      const replace = String(item.valor);
      const valor = replace.replace(".", ",");

      table.innerHTML += `
      <tbody>
        <tr>
          <td>dia ${idx + 1}</td>
          <td>${valor}</td>
        </tr>
      </tbody>
    `;
    });
  }
};
exercicio3();

/* Exercício 4 */

const tableQuestao4 = document.querySelector("#questao4 table");
const faturamentoMensal = [
  {
    uf: "SP",
    faturamento: "R$67.836,43",
  },
  {
    uf: "RJ",
    faturamento: "R$36.678,66",
  },
  {
    uf: "MG",
    faturamento: "R$29.229,88",
  },
  {
    uf: "ES",
    faturamento: "R$27.165,48",
  },
  {
    uf: "outros",
    faturamento: "R$19.849,53",
  },
];

function exercicio4() {
  const faturamento = faturamentoMensal.map((item) =>
    parseFloat(item.faturamento.replace("R$", ""))
  );

  let valorTotal = 0;
  for (let i = 0; i < faturamento.length; i++) {
    valorTotal += faturamento[i];
  }

  faturamentoMensal.map((item) => {
    const int = parseFloat(item.faturamento.replace("R$", ""));
    const porcentagem = ((int * 100) / valorTotal).toFixed();

    tableQuestao4.innerHTML += `
      <tbody>
        <tr>
          <td>${item.uf}</td>
          <td>R$ ${int}</td>
          <td>
            <div class="progress-bar">
            <span class="progress" style="width: ${porcentagem}%;"></span>
            </div>
            <b>${porcentagem}%</b>
          </td>
        </tr>
      </tbody>
    `;
  });
}

exercicio4();

/* Exercício 5 */

function exercicio5() {
  const form = document.querySelector("#questao5 form");
  const input = document.querySelector("#palavra");
  const frase = document.querySelector("#questao5 .frase");

  if (input) {
    const reverseString = (event) => {
      event.preventDefault();
      const textInput = input.value;
      let newString = "";
      for (let i = textInput.length - 1; i >= 0; i--) {
        newString += textInput[i];
      }

      frase.innerHTML += newString;
    };

    form.addEventListener("submit", reverseString);
  }
}
exercicio5();
