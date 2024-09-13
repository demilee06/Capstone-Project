import { createStore } from 'vuex'
import axios from 'axios'
/*eslint-disable*/ 
import{useCookies} from 'vue-cookies'
 /*eslint-disable*/ 
axios.defaults.headers = $cookies.get('token') 
axios.defaults.withCredentials = true

const apiURL = 'https://capstone-project-yqit.onrender.com'

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
      let data = await axios.get (`${apiURL}/users`)
      console.log(data);
      commit('setUsers',data)   
    },
    async getUser({commit},id){
      let data = await axios.get(`${apiURL}/users/${prod.id}`)
      console.log(data);
      
      commit('setUsers',data)
    },
    async insertUser({commit},info){
      let data = await axios.post(`${apiURL}/users/insert`)
      console.log(data);
      
      commit('setUsers',data)
    },
    async loginUser ({commit}){
      let {data} = await axios.post(`${apiURL}/users/login`)
      console.log(data);
      /*eslint-disable*/
      $cookies.set('token',data.token)
    },
    async updateUser({commit},id){
      let data = await axios.patch(`${apiURL}/users/update/${prod.id}`)
      console.log(data);
      
      commit('setUsers',data)
    },
    async deleteUser({commit},id){
      let data = await axios.delete(`${apiURL}/users/update/${prod.id}`)
      console.log(data);
      
      commit('setUsers',data)
    },
    async getProducts({commit}){
      let {data} = await axios.get(`${apiURL}/products`)
      console.log(data);
      commit('setProducts',data)
    },
    async getProduct({commit},id){
      let data = await axios.get(`${apiURL}/products/${prod.id}`)
      console.log(data);
      
      commit('setProducts',data)
    },
    async addProduct ({commit}){
      let data = await axios.post(`${apiURL}/products/addProduct`)
      console.log(data);
      
      commit('setProducts',data)
    },
    async updateProduct ({commit},id){
      let data = await axios.patch(`${apiURL}/products/update/${prod.id}`)
      console.log(data);
      
      commit('setProducts',data)
    },
    async deleteProduct ({commit},id){
      let data = await axios.delete(`${apiURL}/products/delete/${prod.id}`)
      console.log(data);
      
      commit('setProducts',data)
    },
}})
