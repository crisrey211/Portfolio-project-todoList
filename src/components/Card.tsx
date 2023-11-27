import React from 'react'
import type { Todo } from '../types'
import './card.css'

interface Props extends Todo {
  onHandleRemove: (id: number) => void
}

function Card({ id, title, completed, onHandleRemove }: Props) {
  return (
    <li className="link-card">
      <h2 className={completed ? 'completed' : ''}>{title}</h2>
      <input type="checkbox" className="checkbox-big" />
      <button onClick={() => onHandleRemove(id)}>Borrar</button>
    </li>
  )
}

export default Card
