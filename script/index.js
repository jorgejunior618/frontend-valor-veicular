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

const inputAno = document.getElementById('AnoInput')
const inputQuilometragem = document.getElementById('QuilometragemInput')
const chkBxAcidente = document.getElementById('AcidenteCheck')
const btnPrevisao = document.getElementById('solicitaPrevisao')

const listaElAdicionais = document.querySelectorAll('.item-adicional')

btnPrevisao.addEventListener('click', () => {
  const res = validaForm(selectsForm, inputAno, inputQuilometragem)
  if (!res) return alert('Preencha o formulário corretamente')

  const adicionaisForm = []
  for (let i = 0; i < listaElAdicionais.length; i++) {
    const inputAdicional = listaElAdicionais[i].getElementsByTagName('input')[0]
    if (inputAdicional.checked) {
      adicionaisForm.push(inputAdicional.name.split('-')[1])
    }
  }
  
  solicitaPrevisao({
    "marca": selectMarca.value,
    "modelo": selectModelo.value,
    "combustivel": selectCombustivel.value,
    "cor": selectCores.value,
    "transmissao": selectTransmissao.value,
    "condicao": selectCondicao.value,
    "ano": inputAno.value,
    "quilometragem": inputQuilometragem.value,
    "adicionais": JSON.stringify(adicionaisForm),
    "acidente": chkBxAcidente.checked
  })
})
