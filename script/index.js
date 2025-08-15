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

fetch(
  'https://backend-valor-veicular.vercel.app/api/v1/previsoes',
  {
    headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      "marca": "Hynday",
      "modelo": "HB20",
      "ano": 2025,
      "quilometragem": 0,
      "combustivel": "Gasolina",
      "cor": "Branco",
      "transmissao": "Auto",
      "adicionais": "",
      "condicao": "novo",
      "acidente": false
    })
  }
)
console.log("srcipt pronto")