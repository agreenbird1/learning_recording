import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

/**
 * @param {*} request
 * @param {*} params - 包含动态路由参数
 */
export async function GET(request, params) {
  // 设置了cookie后，会自动带上
  const token = request.cookies.get('token')
  // const cookieStore = cookies()
  // const token = cookieStore.get('token')
  console.log(token)

  return new NextResponse('hello api2', {
    status: 200,
    headers: {
      'Set-Cookie': 'token=test-token',
    },
  })
  // redirect('https://nextjs.org/')
  //   return new NextResponse(`
  //     <html>
  //       <body>
  //         <h1>api2</h1>
  //       </body>
  //     </html>
  //   `)
}
