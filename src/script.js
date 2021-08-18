const $ = document.querySelector.bind(document)

const date = $('#date')
const hour = $('#hour')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

requestAnimationFrame(atualizer)

async function atualizer() {
  const ano = new Date()

  const anoData = {
    day: ano.getDate(),
    month: ano.getMonth() + 1,
    year: ano.getFullYear()
  }

  if (anoData.day < 10) {
    anoData.day = '0' + `${anoData.day}`
  }
  if (anoData.month < 10) {
    anoData.month = '0' + `${anoData.month}`
  }

  const hora = new Date()

  const horaData = {
    hour: hora.getHours(),
    minutes: hora.getMinutes(),
    seconds: hora.getSeconds()
  }

  if (horaData.hour < 10) {
    horaData.hour = '0' + `${horaData.hour}`
  }
  if (horaData.minutes < 10) {
    horaData.minutes = '0' + `${horaData.minutes}`
  }
  if (horaData.seconds < 10) {
    horaData.seconds = '0' + `${horaData.seconds}`
  }

  date.innerText = `${anoData.day} / ${anoData.month} / ${anoData.year} `
  hour.innerText = `${horaData.hour} : ${horaData.minutes} : ${horaData.seconds}`

  await sleep(500)

  requestAnimationFrame(atualizer)
}
