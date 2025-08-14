const abaPredicao = document.getElementById('predicao')
const abaNovosRegistros = document.getElementById('novosRegistros')
const btnAbaPrever = document.getElementById('btnAbaPrever')
const btnAbaAdicionar = document.getElementById('btnAbaAdicionar')

abaPredicao.classList.toggle('active')
btnAbaPrever.classList.toggle('active')
abaNovosRegistros.classList.toggle('hide')

const trocarAba = (element) => {
  if (element.classList.contains('active')) return
  abaPredicao.classList.toggle('active')
  abaNovosRegistros.classList.toggle('active')
  btnAbaPrever.classList.toggle('active')
  btnAbaAdicionar.classList.toggle('active')
}


console.log("srcipt pronto")