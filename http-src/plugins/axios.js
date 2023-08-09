import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-2aff2-default-rtdb.firebaseio.com/'

// Adicionando headers globais:
//axios.defaults.headers.common['Authorization'] = 'abc123'

// Adicionando headers especificos para alguns métodos:
//axios.defaults.headers.get['Accepts'] = 'aplication/json'


// Criando várias instâncias do Axios 
Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-2aff2-default-rtdb.firebaseio.com/',
            headers: {
                //"Authorization": "abc123" ou
               
                    "Authorization": "abc123"
              
            }
        })

        // interceptor de requisição
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            return config
            //podemos definir um metodo para caso aconteça algum erro
            //que é rejeitar a 'Promisse'
        }, error => Promisse.reject(error))

        // interceptor de resposta
        Vue.prototype.$http.interceptors.response.use(res => {
           /* const array = []
           for(let chave in res.data) {
                array.push({ id: chave, nome: res.data[chave].nome, email: res.data[chave] })
           } 

           res.data = array */
           return res
        }, error => Promisse.reject(error))
    }
})