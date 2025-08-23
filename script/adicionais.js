const listaAdicionais = {
  'Bancos Aquecidos': 'Heated Seats',
  'GPS': 'GPS',
  'Bluetooth': 'Bluetooth',
  'Bancos de Couro': 'Leather Seats',
  'Câmera de Ré': 'Backup Camera',
  'Partida Remota': 'Remote Start',
  'Teto Solar': 'Sunroof',
  'Navegação por Satélite': 'Navigation'
}

const secaoAdicionais = document.getElementById('lista-adicionais')

const itens_adicionais = Object.keys(listaAdicionais)

for (let i = 0; i < itens_adicionais.length; i++) {
  const adicionalNome = itens_adicionais[i]
  const itemAdicional = document.createElement('li')
  itemAdicional.className = 'item-adicional'
  itemAdicional.innerHTML = `
      <label for="adicional-${adicionalNome}">${adicionalNome}</label>
      <input type="checkbox" name="adicional-${adicionalNome}" id="adicional-${adicionalNome}">
    `
  secaoAdicionais.appendChild(itemAdicional)
}