#### 流式渲染数据

粗浅的理解其实就是动态加载数据，完成一部分显示一部分。
但是对于next.js来说，渲染的数据是分chunk传递的。
对于当前路由下，每个组件都可以是一个chunk。
那么可以将静态部分拆分先传递，再依次根据suspense边界传递chunk。
客户端接收到chunk反序列化进行水和（hydrate）。

在posts路由下，我们查看路由数据的请求。响应表头Transfer-Encoding: chunked
代表数据是分块返回。
当前suspense分别是1s、3s、5s，那么posts数据最少也是5s以上。


1. loading.js
2. suspense