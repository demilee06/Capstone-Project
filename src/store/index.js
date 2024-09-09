import { createStore } from 'vuex'
import axios from 'axios'
/*eslint-disable*/ 
import{useCookies} from 'vue-cookies'
 /*eslint-disable*/ 
axios.defaults.headers = $cookies.get('token') 
axios.defaults.withCredentials = true

export default createStore({
  state: {
    users:null,
    products:null
  },
  getters: {
    
  },
  mutations: {
    setUsers(state,payload){
      state.users = payload
    },
    setProducts(state,payload){
      state.products = payload
    }
  },
  actions: {
    async getUsers({commit}){
      let data = await axios.get (`http://localhost:2023/users`)
      console.log(data);
      commit('setUsers',data)
    },
    async getUser({commit}){
      let data = await axios.get(`http://localhost:2023/users/:id`)
      console.log(data);
      
      commit('setUsers',data)
    },
    async insertUser({commit},info){
      let data = await axios.post(`http://localhost:2023/users/insert`)
      console.log(data);
      
      commit('setUsers',data)
    },
    async loginUser ({commit}){
      let {data} = await axios.post(`http://localhost:2023/users/login`)
      console.log(data);
      /*eslint-disable*/
      $cookies.set('token',data.token)
    },
    async updateUser({commit}){
      let data = await axios.patch(`http://localhost:2023/users/update/:id`)
      console.log(data);
      
      commit('setUsers',data)
    },
    async deleteUser({commit}){
      let data = await axios.delete(`http://localhost:2023/users/update/:id`)
      console.log(data);
      
      commit('setUsers',data)
    },
    async getProducts({commit}){
      let {data} = await axios.get(`http://localhost:2023/products`)
      console.log(data);
      commit('setProducts',data)
    },
    async getProduct({commit}){
      let data = await axios.get(`http://localhost:2023/products/:id`)
      // let products = await data.json()
      // commit('setProducts',products)
    },
    async addProduct ({commit}){
      let data = await axios.post(`http://localhost:2023/products/addProduct`)
      console.log(data);
      
      commit('setProducts',data)
    },
    async updateProduct ({commit}){
      let data = await axios.patch(`http://localhost:2023/products/update/:id`)
      console.log(data);
      
      commit('setProducts',data)
    },
    async deleteProduct ({commit}){
      let data = await axios.delete(`http://localhost:2023/products/delete/:id`)
      console.log(data);
      
      commit('setProducts',data)
    },
}})
