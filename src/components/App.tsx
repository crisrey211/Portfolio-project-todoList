import React from 'react'
import { TODO_FILTERS } from 'src/const'
import type { FilterValue, Todo } from '../types'
import Card from './Card'
import Footer from './Footer'

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
  const [filterSelected, setFilterSelected] = React.useState<FilterValue>(
    TODO_FILTERS.ALL
  )

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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const activeCounter = listTodos.filter((item) => !item.completed).length
  const completedCounter = listTodos.length - activeCounter

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
      <Footer
        activeCounter={activeCounter}
        completedCounter={completedCounter}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={() => {}}
      />
    </div>
  )
}
export default App
