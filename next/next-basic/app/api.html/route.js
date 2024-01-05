import { NextResponse } from 'next/server'

export async function GET(request, params) {
  // 设置响应头，告诉客户端浏览器，这是一个html页面
  return new NextResponse(
    `
      <html>
        <body>
          <h1>api2</h1>
        </body>
      </html>
    `,
    {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    }
  )
}
