// @login
// 平行路由得page会被注入到通文件夹层级下的layout props中
// 平行路由不会影响子路由
export default function layout(props) {
  return (
    <div>
      {props.children}
      {props.login}
      {props.logout}
    </div>
  )
}
