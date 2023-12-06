import React from 'react'
import { type FilterValue, Todo } from 'src/types'
import Filters from './Filters'

interface Props {
  activeCounter: number
  completedCounter: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  handleFilterChange: (filter: FilterValue) => void
}

function Footer({
  activeCounter = 0,
  onClearCompleted,
  filterSelected,
  handleFilterChange,
}: Props) {
  return (
    <footer className="footer">
      <span>{activeCounter} Tareas completadas</span>
      <Filters
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />
    </footer>
  )
}

export default Footer
