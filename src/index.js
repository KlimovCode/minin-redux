import './styles.css'

document.getElementById('theme').addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

const counter = document.getElementById('counter')
const add = document.getElementById('add')
const sub = document.getElementById('sub')
const async = document.getElementById('async')

let state = 0

add.addEventListener('click', () => {
  state++
  render()
})
sub.addEventListener('click', () => {
  state--
  render()
})
async.addEventListener('click', () => {
  setTimeout(() => {
    state += 1000
    render()
  }, 2000);
})

const render = () => {
  counter.textContent = state.toString()
}

render()