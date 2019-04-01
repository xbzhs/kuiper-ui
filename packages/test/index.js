// 为组件提供 install 方法，供组件对外按需引入
import KrTest from './src/test'
KrTest.install = Vue => {
  Vue.component(KrTest.name, KrTest)
}
export default KrTest