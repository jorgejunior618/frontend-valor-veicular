const abaPredicao = document.getElementById('predicao')
const abaNovosRegistros = document.getElementById('novosRegistros')
const btnAbaPrever = document.getElementById('btnAbaPrever')
const btnAbaAdicionar = document.getElementById('btnAbaAdicionar')

abaPredicao.classList.toggle('active')
btnAbaPrever.classList.toggle('active')
abaNovosRegistros.classList.toggle('hide')

const sectResultadoPrevisao = document.getElementById('resultado-previsao')
const elResultadoPrevisao = document.getElementById('prediction-result')

const trocarAba = (element) => {
  if (element.classList.contains('active')) return
  abaPredicao.classList.toggle('active')
  abaNovosRegistros.classList.toggle('active')
  btnAbaPrever.classList.toggle('active')
  btnAbaAdicionar.classList.toggle('active')
}

const inputAno = document.getElementById('AnoInput')
const inputQuilometragem = document.getElementById('QuilometragemInput')
const chkBxAcidente = document.getElementById('AcidenteCheck')
const btnPrevisao = document.getElementById('solicitaPrevisao')

const listaElAdicionais = document.querySelectorAll('.item-adicional')
let dadosForm = {}
const setValorPrevisao = (res) => {
  const formatoDolar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

const valorFormatado = formatoDolar.format(res.prediction);
  elResultadoPrevisao.innerText = valorFormatado
  
}
btnPrevisao.addEventListener('click', () => {
  const res = validaForm(selectsForm, inputAno, inputQuilometragem)
  if (!res) return alert('Preencha o formulário corretamente')

  let adicionaisForm = ""
  for (let i = 0; i < listaElAdicionais.length; i++) {
    const inputAdicional = listaElAdicionais[i].getElementsByTagName('input')[0]
    if (inputAdicional.checked) {
      adicionaisForm += `${listaAdicionais[inputAdicional.name.split('-')[1]]}, `
    }
  }
  if (adicionaisForm.endsWith(', ')) {
    adicionaisForm = adicionaisForm.substring(0, adicionaisForm.length - 2)
  }
  dadosForm = {
    "Car Model": "Honda - Civic",
    "Fuel Type": "Diesel",
    "Color": "Yellow",
    "Transmission": "Manual",
    "Condition": "Like New",
    "Year": 2020,
    "Mileage": 123123,
    "Options/Features": "Bluetooth",
    "Accident": "No"
}
  // dadosForm = {
  //   "Car Model": `${selectMarca.value} - ${selectModelo.value}`,
  //   "Fuel Type": selectCombustivel.value,
  //   "Color": selectCores.value,
  //   "Transmission": selectTransmissao.value,
  //   "Condition": selectCondicao.value,
  //   "Year": Number(inputAno.value),
  //   "Mileage": Number(inputQuilometragem.value),
  //   "Options/Features": adicionaisForm,
  //   "Accident": chkBxAcidente.checked ? 'Yes' : 'No'
  // }

  solicitaPrevisao(dadosForm, setValorPrevisao)

  if (sectResultadoPrevisao.classList.contains('hide'))
  sectResultadoPrevisao.classList.remove('hide')
})
