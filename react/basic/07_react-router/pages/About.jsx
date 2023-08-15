import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()
  const goodsList = [
    {
      value: '水果',
      id: 1,
    },
    {
      value: '鞋子',
      id: 2,
    },
  ]
  return (
    <div>
      <h2>About Page</h2>
      <ul>
        {goodsList.map((goods) => (
          <li key={goods.id} onClick={() => navigate(`/detail/${goods.id}`)}>
            {goods.value}
          </li>
        ))}
      </ul>
    </div>
  )
}
