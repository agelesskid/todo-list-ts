import { nanoid } from "nanoid"

type Task = {
    id: string,
    title: string,
    completed: boolean,
    createdAt: Date
}

const list = document.querySelector<HTMLUListElement>('#todo-list')
const form = document.querySelector<HTMLFormElement>('#todo-form')
const input = document.querySelector<HTMLInputElement>('#todo-input')
const tasks: Task[] = loadTasks()
tasks.forEach(addListItem)

form?.addEventListener("submit", e => {
  e.preventDefault()

  if (!input?.value) return

  const newTask: Task = {
    id: nanoid(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  }

  addListItem(newTask)
  tasks.push(newTask)
  saveTasks()
  input.value = ''
})

function addListItem(task: Task){
  const item = document.createElement('li')
  const label = document.createElement('label')
  const checkbox = document.createElement('input')
  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked
    saveTasks()
  })
  checkbox.type = 'checkbox'
  checkbox.checked = task.completed
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
  
}

function saveTasks() {
    localStorage.setItem('TASKS', JSON.stringify(tasks))
}

function loadTasks(): Task[] {
    const taskJSON = localStorage.getItem("TASKS")
    if (taskJSON == null) return []
    return JSON.parse(taskJSON)
}
