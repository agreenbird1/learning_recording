import { useRef } from 'react'
import useUpdate from './useUpdate'

const Observer = (state, cb) => {
  const proxy = new Proxy(state, {
    set: (target, key, value) => {
      const ret = Reflect.set(target, key, value)
      cb()
      return ret
    },
    get: (target, key, receiver) => {
      const res = Reflect.get(target, key, receiver)
      return typeof res === 'object'
        ? Observer(res, cb)
        : Reflect.get(target, key)
    },
  })
  return proxy
}

export const useReactive = (initialState) => {
  const state = useRef(initialState)
  const update = useUpdate()
  const proxy = Observer(state.current, update)
  return proxy
}

export default useReactive
