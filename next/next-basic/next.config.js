/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/test', // source 则为 /test/blog/:slug
  //   output: 'export',
  // 对于特定的路径添加特定的HTTP响应头
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      // 通配符
      {
        source: '/blog/:slug*',
        headers: [
          {
            key: 'custom-header-slug',
            value: 'slug',
          },
        ],
      },
      // has
      {
        source: '/has/*',
        // 当 source 为 /has/* 时
        // 当请求的 query 参数中有 slug 且值 为 slug 时
        // 添加 custom-header-slug 的响应头
        has: [
          {
            type: 'query',
            key: 'slug',
            value: 'slug',
          },
        ],
        headers: [
          {
            key: 'custom-header-slug',
            value: 'slug',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
