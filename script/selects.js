const selectMarca = document.getElementById('MarcaSelect')
const selectModelo = document.getElementById('ModeloSelect')
const selectCombustivel = document.getElementById('CombustivelSelect')
const selectCores = document.getElementById('CoresSelect')
const selectTransmissao = document.getElementById('TransmissaoSelect')
const selectCondicao = document.getElementById('CondicaoSelect')

const marcas = {
  'Hyundai': ['Tucson', 'Sonata', 'Santa Fe', 'Elantra', 'Kona'],
  'Land Rover': ['Range Rover', 'Velar', 'Discovery', 'Evoque', 'Defender'],
  'Honda': ['Accord', 'Fit', 'Civic', 'CR-V', 'Pilot'],
  'Kia': ['Soul', 'Forte', 'Optima', 'Sportage', 'Sorento'],
  'Volkswagen': ['Golf', 'Passat', 'Tiguan', 'Beetle', 'Jetta'],
  'Mazda': ['CX-9', 'CX-5', 'MX-5 Miata', 'Mazda6', 'Mazda3'],
  'Audi': ['Q5', 'Q7', 'A6', 'A4', 'A3'],
  'Chevrolet': ['Traverse', 'Cruze', 'Malibu', 'Silverado', 'Equinox'],
  'Jaguar': ['XJ', 'XF', 'I-Pace', 'XE', 'F-Type'],
  'BMW': ['3 Series', 'X3', 'X7', '5 Series', 'X5'],
  'Fiat': ['500X', '500', 'Doblo', 'Panda', 'Tipo'],
  'Ford': ['Mustang', 'Escape', 'Focus', 'F-150', 'Explorer'],
  'Tesla': ['Model Y', 'Model 3', 'Model X', 'Model S'],
  'Toyota': ['RAV4', 'Highlander', 'Camry', 'Corolla', 'Tacoma'],
  'Chevy': ['Equinox', 'Malibu', 'Traverse', 'Silverado', 'Camaro'],
  'Mercedes': ['C-Class', 'E-Class', 'A-Class', 'GLC', 'S-Class'],
  'Nissan': ['Altima', 'Sentra', 'Leaf', 'Maxima', 'Rogue'],
  'Chrysler': ['300', 'Charger', 'Pacifica', 'Voyager', 'Dodge Durango'],
  'Subaru': ['Legacy', 'Forester', 'Impreza', 'Crosstrek', 'Outback'],
  'Porsche': ['Macan', 'Taycan', 'Panamera', 'Cayenne', '911'],
  'Aston Martin': ['DB11', 'DBX', 'Vantage'],
  'Lamborghini': ['Urus', 'Huracan', 'Aventador'],
  'Bugatti': ['Veyron', 'Chiron'],
  'Rolls-Royce': ['Phantom', 'Cullinan', 'Ghost'],
  'Maserati': ['Levante', 'Quattroporte', 'Ghibli'],
  'Bentley': ['Flying Spur', 'Continental GT', 'Bentayga'],
  'Mercedes-Benz': ['G-Class', 'Maybach', 'S-Class'],
  'Ferrari': ['Portofino', '488 GTB', 'F8 Tributo'],
  'McLaren': ['720S', 'P1', '570S'],
}
const tiposCombustiveis = ['Híbrido', 'Diesel', 'Elétrico', 'Gasolina', 'Petroleo']
const cores = ['Preto', 'Prata', 'Amarelo', 'Laranja', 'Verde', 'Branco', 'Cinza', 'Vermelho', 'Marrom', 'Azul']
const transmissoes = ['Automático', 'Manual']
const listaCondicao = ['Usado', 'Seminovo', 'Novo']

const popularSelect = (itens, select) => {
  const option_1 = document.createElement("option")
  option_1.value = 'Selecionar'
  option_1.innerText = 'Selecionar'
  select.appendChild(option_1)

  for (let i = 0; i < itens.length; i++) {
    const option_i = document.createElement("option")
    option_i.value = itens[i]
    option_i.innerText = itens[i]
    select.appendChild(option_i)
  }
  select.value = 'Selecionar'
}

popularSelect(Object.keys(marcas), selectMarca)
popularSelect([], selectModelo)
selectModelo.setAttribute('disabled', null)
popularSelect(tiposCombustiveis, selectCombustivel)
popularSelect(cores, selectCores)
popularSelect(transmissoes, selectTransmissao)
popularSelect(listaCondicao, selectCondicao)

selectMarca.onchange = (event) => {
  const { value: marcaSelecionada } = event.currentTarget
  selectModelo.innerHTML = null

  if (marcaSelecionada === 'Selecionar') {
    selectModelo.setAttribute('disabled', null)
    popularSelect([], selectModelo)
  } else {
    selectModelo.removeAttribute('disabled')
    popularSelect(marcas[marcaSelecionada], selectModelo)
  }
  
}
