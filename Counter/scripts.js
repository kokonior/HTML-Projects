const txtCounter = document.getElementById('txt-counter')

const btnDecrease = document.getElementById('btn-decrease')

const btnReset = document.getElementById('btn-reset')

const btnIncrease = document.getElementById('btn-increase')

let counter = 0

btnIncrease.addEventListener('click', () => {
  counter += 1
  txtCounter.innerText = counter
})

btnDecrease.addEventListener('click', () => {
  counter -= 1
  txtCounter.innerText = counter
})

btnReset.addEventListener('click', () => {
  counter = 0
  txtCounter.innerText = 0
})