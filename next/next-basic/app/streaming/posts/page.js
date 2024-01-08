import { Suspense } from 'react'

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const PostFeed = async () => {
  await sleep(1000)
  return <h2>PostFeed</h2>
}

const Weather = async () => {
  await sleep(3000)
  return <h2>Weather</h2>
}

const Recommend = async () => {
  await sleep(5000)
  return <h2>Recommend</h2>
}

export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
      <Suspense fallback={<p>Loading recommend...</p>}>
        <Recommend />
      </Suspense>
    </section>
  )
}
