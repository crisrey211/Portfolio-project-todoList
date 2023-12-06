import React from 'react'
import type { Todo } from '../types'
import './card.css'

interface Props extends Todo {
  onHandleRemove: (id: number) => void
  onHandleCompleted: ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => void
}

function Card({
  id,
  title,
  completed,
  onHandleRemove,
  onHandleCompleted,
}: Props) {
  return (
    <li className="link-card">
      <h2 className={completed ? 'completed' : ''}>{title}</h2>
      <input
        checked={completed}
        type="checkbox"
        className="checkbox-big"
        onChange={(ev) =>
          onHandleCompleted({ id, completed: ev.target.checked })
        }
      />
      <div className="button">
        <button className="noselect" onClick={() => onHandleRemove(id)}>
          <span className="text">Delete</span>
        </button>
      </div>
    </li>
  )
}

export default Card
