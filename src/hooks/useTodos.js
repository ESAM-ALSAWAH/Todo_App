import { useState } from 'react'

export const useTodos = (initialValue) => {
  const [state, setState] = useState(() => {
    const todos = localStorage.getItem('todos')
    return todos ? JSON.parse(todos) : []
  })
  const AddTodo = (obj) => {
    setState((prev) => [...prev, obj])
    localStorage.setItem('todos', JSON.stringify([...state, obj]))
  }
  const EditTodo = (arry) => {
    setState((prev) => [...arry])
    localStorage.setItem('todos', JSON.stringify([...arry]))
  }
  const DeleteTodo = (id) => {
    const newstate = state.filter((t) => t.id !== id)
    setState((prev) => newstate)
    localStorage.setItem('todos', JSON.stringify(newstate))
  }
  const DeleteCompletedTodo = () => {
    const newstate = state.filter((t) => t.completed === false)
    setState((prev) => newstate)
    localStorage.setItem('todos', JSON.stringify(newstate))
  }
  return [state, AddTodo, DeleteTodo, EditTodo, DeleteCompletedTodo]
}
