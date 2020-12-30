import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 10,
        students: [
            { id: 1, name: 'lt', age: 20 },
            { id: 2, name: 'rs', age: 15 },
            { id: 3, name: 'fz', age: 30 },
            { id: 4, name: 'ty', age: 10 },
        ]
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        incrementCount(state, count) {
            state.count += count
        },
        incrementCount1(state, payload) {
            state.count += payload.count
        }
    },
    actions: {
        //异步操作
        aincrement(context,payload){
            return new Promise((resole,reject)=>{
                setTimeout(()=>{
                    context.commit('increment')
                    console.log(payload)

                    resole('11111')
                },1000);
            })
        }
    },
    getters: {
        powerCount(state) {
            return state.count * state.count
        },
        more18Stu(state) {
            return state.students.filter(s => s.age > 18)
        },
        moreAgeStu(state) {
            return (age) => {
                return state.students.filter(s => s.age > age)
            }
        }
    },
    modules: {},
})

export default store