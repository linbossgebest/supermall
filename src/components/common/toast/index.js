import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {
    //创建组件构造器
    const toastConstructor = Vue.extend(Toast)

    //new 一个组件构造器，创建组件对象
    const toast = new toastConstructor()

    //将组件对象挂载到某一元素上
    toast.$mount(document.createElement('div'))

    //将挂载了组件对象的元素加入到 body中
    document.body.appendChild(toast.$el)

    //原型添加$toast
    Vue.prototype.$toast = toast
}

export default obj