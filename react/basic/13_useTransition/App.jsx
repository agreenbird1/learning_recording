import React, { memo, useState, useTransition } from 'react'
import { faker } from '@faker-js/faker'

const fakerArray = Array(100000)
  .fill()
  .map(() => ({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  }))

// useTransition/useDeferredValue

const App = memo(() => {
  const [items, setItems] = useState(fakerArray)
  const [pending, startTransition] = useTransition()
  console.log(items)

  // 根据输入去进行筛选
  const search = (e) => {
    // 当数量极大时候会出现明显的卡顿现象（输入/删除后无反应）
    // setItems(fakerArray.filter((a) => a.username.includes(e.target.value)))

    // 此时虽然还卡顿，但是输入改变不会有延迟
    // startTransition 类似于 nextTick，会将其放到下一次渲染
    startTransition(() => {
      setItems(fakerArray.filter((a) => a.username.includes(e.target.value)))
    })
  }

  return (
    <>
      <input type="text" onChange={search} />
      <div>
        {pending && 'pending'}
        {!pending && items.map((item, i) => (
          <div key={i}>
            <div>{item.username}</div>
          </div>
        ))}
      </div>
    </>
  )
})

export default App
