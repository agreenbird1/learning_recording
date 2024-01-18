import React from 'react'
import useUnmountedRef from '../hooks/useUnmountedRef'

function useUnmountedRefPage() {
  const [show, setShow] = React.useState(true)
  return (
    <>
      <div>useUnmountedRef</div>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Child />}
    </>
  )
}

const Child = () => {
  useUnmountedRef()
  return <div>child</div>
}

export default useUnmountedRefPage
