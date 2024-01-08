// next.js 内置模块化 css 支持
import style from './style.module.css'
// 外部样式
import './style.css'

export default function Page() {
  return (
    <div className={style.module}>
      <h4 className="module-h4">module Content</h4>
    </div>
  )
}
