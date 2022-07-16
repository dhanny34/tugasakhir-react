import React, {createContext, useState} from "react";
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

export const TodoContext = createContext()

const App = () =>{

  const [todos, setTodos] = useState([
    {
      id: 1,
      judul: "Selesaikan React Progate",
      komplit: false
    },
    {
      id: 2,
      judul: "Selesaikan Udemy JS",
      komplit: false
    },
    {
      id: 3,
      judul: "Belajar apa saja",
      komplit: false
    },
  ])

  const toogleSelesai = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId){
        todo.komplit = !todo.komplit
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const todoHapus = (todoId) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== todoId
    })
    setTodos(updatedTodos)
  }


  const todoTambah = (todoJudul) => {
    if (todoJudul === ''){
      return
    }

    const todoBaru = {
      id: todos.length + 1,
      judul: todoJudul,
      komplit: false
    }

    const updatedTodos = todos.concat(todoBaru)
    setTodos(updatedTodos)
  }

  return (
    <TodoContext.Provider value={{toogleSelesai, todoHapus}}>
      <div style={{textAlign: 'center', padding: '12px'}}>
        <h1>Tugas Akhir Todo List</h1>

        <TodoForm todoTambah = {todoTambah} />
        <Todos todos = {todos} />
      </div>
    </TodoContext.Provider>
  )

}

export default App