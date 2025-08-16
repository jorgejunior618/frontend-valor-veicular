const BASE_URL = 'https://backend-valor-veicular.vercel.app/api/v1'

const validaForm = (selects, inputAno, inputQuilometragem) => {
  for (let i = 0; i < selects.length; i++) {
    if (selects[i].value === 'Selecionar') return false
  }
  const ano = Number(inputAno.value)
  const km = Number(inputQuilometragem.value)
  if (isNaN(ano) || ano == 0 || isNaN(km) || km == 0) return false

  return true
}

const solicitaPrevisao = async (form) => {
  fetch(
    `${BASE_URL}/previsoes`,
    {
      headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(form)
    }
  )
}