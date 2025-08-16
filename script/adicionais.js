const listaAdicionais = [
    'Bancos Aquecidos',
    'GPS',
    'Bluetooth',
    'Bancos de Couro',
    'Câmera de Ré',
    'Partida Remota',
    'Teto Solar',
    'Navegação por Satélite'
]

const secaoAdicionais = document.getElementById('lista-adicionais')

for (let i = 0; i < listaAdicionais.length; i++) {
  const adicional = listaAdicionais[i]
  const itemAdicional = document.createElement('li')
  itemAdicional.className = 'item-adicional'
  itemAdicional.innerHTML = `
      <label for="adicional-${adicional}">${adicional}</label>
      <input type="checkbox" name="adicional-${adicional}" id="adicional-${adicional}">
    `
  secaoAdicionais.appendChild(itemAdicional)
}