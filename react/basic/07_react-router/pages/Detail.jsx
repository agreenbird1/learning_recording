import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const params = useParams()
  return (
    <div>
      Detail; <span style={{ color: 'red' }}>id: {params.id}</span>
    </div>
  )
}
