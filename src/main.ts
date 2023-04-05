import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

const list = document.querySelector<HTMLUListElement>('#todo-list')
const form = document.querySelector<HTMLFormElement>('#todo-form')
const input = document.querySelector<HTMLInputElement>('#todo-input')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <ul id="todo-list">
      <li>123</li>
    </ul>
    <form class="card" id="todo-form">
      <input id="todo-input" type="text" />
      <button id="counter" type="submit">Add</button>
    </form>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
