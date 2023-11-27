import React from 'react'
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

  return (
    <div>
      {todos.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          completed={item.completed}
          onHandleRemove={onHandleRemove}
        />
      ))}
    </div>
  )
}
export default App
