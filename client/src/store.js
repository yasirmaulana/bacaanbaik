import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const $http = 'http://localhost:3000/'

export default new Vuex.Store({
  state: {
    books: []

  },
  mutations: {
    getBook: function (state, payload) {
      state.books = payload
    }
  },
  actions: {
    getBooks: function ({ commit }) {
      let url = $http + 'books/list/'
      axios
        .get(url)
        .then(response => {
          console.log('>>>>>>>>>>', response)
          let books = response.data.data
          commit('getBooks', books)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})
