'use client'

export default function Page(props) {
    console.log(props)
    return <h1>{props.params.id}</h1>
}