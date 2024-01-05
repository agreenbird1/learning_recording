import Link from 'next/link'
import { photos } from './data'

/**
 * 对于 photo 页面，拦截所有的请求
 * 当从 intercepting 页面跳转到 photo 页面时，拦截
 * 当直接进入 photo 页面时，不拦截
 * 拦截页面的层级与正常层级一直，所以 modal 下的 photo 的层级与当前 photo 层级需要一致
 */
export default function Page() {
  return (
    <>
      <h1>Intercepting</h1>
      {photos.map(({ id, src }) => (
        <Link key={id} href={`/intercepting/photo/${id}`}>
          <img width="100" src={src} />
        </Link>
      ))}
    </>
  )
}
