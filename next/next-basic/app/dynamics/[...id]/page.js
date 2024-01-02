'use client'

//  [...params] 会依次捕获所有路由片段，如 /dynamics/1/2/3 则依次捕获 1, 2, 3
export default function Page(props) {
    console.log(props)
    return <h1>dynamics: {props.params.id.join('/')}</h1>
}