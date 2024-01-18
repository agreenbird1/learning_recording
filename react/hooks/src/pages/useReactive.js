import React from 'react'
import useReactive from '../hooks/useReactive'
import useUpdate from '../hooks/useUpdate'

function useReactivePage() {
  const state = useReactive({
    count: 1,
    name: 'jack',
    list: [1, 2, 3],
  })
  const update = useUpdate()

  return (
    <div>
      <div>{new Date().getTime()}</div>
      <button onClick={update}>update</button>
      <div>{state.count}</div>
      <button onClick={() => state.count++}>count++</button>
      <div>{state.name}</div>
      <button onClick={() => (state.name = 'rose')}>change name</button>
      <div>{state.list}</div>
      <button onClick={() => state.list.push(4)}>push 4</button>
    </div>
  )
}

export default useReactivePage
