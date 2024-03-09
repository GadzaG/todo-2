import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todoStore', () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [{}]

  const addTodo = (todo) => {
    todos.push(todo)
    saveToLocalStorage()
  }

  const editTodo = (todo, index) => {
    todos[index] = todo
    this.saveToLocalStorage()
  }

  const deleteTodo = (index) => {
    todos.splice(index, 1)
    saveToLocalStorage()
  }

  const saveToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  return {
    addTodo,
    editTodo,
    deleteTodo,
    todos
  }
})
