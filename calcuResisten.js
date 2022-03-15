function pegarDados() {
  let Prima = document.getElementById("1Faixa").value;
  let Segunda = document.getElementById("2Faixa").value;
  let Terça = document.getElementById("3Faixa").value;
  let Quarta = document.getElementById("4Faixa").value;
  let Quinta = document.getElementById("5Faixa").value;
  let soma = parseFloat(Prima + Segunda + Terça);
  let resultado = soma * Quarta;
  let v0 = resultado * Quinta;
  let v1 = resultado - v0;
  let v2 = resultado + v0;

    document.getElementById("resultado").innerHTML =
    resultado + " Omhs " + " com tolerância de " + v1 + " Omhs e máxima de " + v2 + " Omhs ";
}