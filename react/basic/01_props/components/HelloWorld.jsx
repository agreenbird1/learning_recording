import React from 'react'

export default function HelloWorld(props) {
  return (
    <div>
      <h1>{props.content}</h1>
      <p>Count: {props.count}</p>
      <button onClick={() => props.addCount(1)}>+1</button>
    </div>
  )
}
