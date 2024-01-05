import { NextResponse } from 'next/server'

// 路由处理程序
// 支持 GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS
// 简单理解就是接口，但是我们这里是在next中进行处理的

export async function GET() {
  const res = await fetch('https://dog-api.kinduff.com/api/facts')
  const data = await res.json()

  return NextResponse.json({ a: 1 })
}


