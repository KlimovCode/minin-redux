import './styles.css'
import { createStore } from './store.js'

document.getElementById('theme').addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

const counter = document.getElementById('counter')
const add = document.getElementById('add')
const sub = document.getElementById('sub')
const async = document.getElementById('async')

const store = createStore(() => { }, { counter: 0 })
console.log(store.getState())

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