const inicio = document.getElementById("inicio"); // Obtem o elemento que está no html e joga na constante
const sobre = document.getElementById("sobre");
const formacao = document.getElementById("formacao");
const portfolio = document.getElementById("portfolio");
const contato = document.getElementById("contato");

document
  .getElementById("menu-inicio")
  .addEventListener("click", () => Rolar(inicio)); // A Função 'Rolar' é chamada quando ocorrer um evento de clique no elemento
document
  .getElementById("menu-sobre")
  .addEventListener("click", () => Rolar(sobre));
document
  .getElementById("menu-formacao")
  .addEventListener("click", () => Rolar(formacao));
document
  .getElementById("menu-portfolio")
  .addEventListener("click", () => Rolar(portfolio));
document
  .getElementById("menu-contato")
  .addEventListener("click", () => Rolar(contato));

function Rolar(el) {
  el.scrollIntoView({ block: "center" }); // O elemento selecionado será mostrado no centro da tela do usuário
}

function enviar() {
  window.alert("Formulário enviado com sucesso!"); // Mostra um alerta quando o usuário inserir todas as informações no formulário e clicar em 'ENVIAR'
}
