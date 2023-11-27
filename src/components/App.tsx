import React from 'react'
import type { Todo } from '../types'
import Card from './Card'

const listTodos = [
  {
    id: 1,
    title: 'Learning node',
    completed: false,
  },
  {
    id: 2,
    title: 'Watch tv movies',
    completed: true,
  },
  {
    id: 3,
    title: 'Walking around',
    completed: true,
  },
]
function App() {
  const [todos, setTodos] = React.useState(listTodos)

  const onHandleRemove = (id: number) => {
    const newListTodos = todos.filter((item) => item.id !== id)
    setTodos(newListTodos)
  }

  const onHandleCompleted = ({
    id,
    completed,
  }: Pick<Todo, 'id' | 'completed'>): void => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed,
        }
      }
      return item
    })
    setTodos(newTodos)
  }

  return (
    <div>
      {todos.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          completed={item.completed}
          onHandleRemove={onHandleRemove}
          onHandleCompleted={onHandleCompleted}
        />
      ))}
    </div>
  )
}
export default App
