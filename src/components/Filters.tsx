import React from 'react'
import './filters.css'
import { type FilterValue } from 'src/types'
import { FILTER_BUTTONS } from '../const'
interface Props {
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
}

const Filters: React.FC<Props> = ({ filterSelected, handleFilterChange }) => {
  return (
    <ul>
      {Object.entries(FILTER_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''

        return (
          <li key={key}>
            <a
              className={className}
              href={href}
              onClick={(ev) => {
                ev.preventDefault()
                handleFilterChange(key as FilterValue)
              }}
            >
              {literal}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default Filters
