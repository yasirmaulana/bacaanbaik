<template>
  <div>
    <input type="text" placeholder="input your email" v-model="email" /> 
    <input type="password" placeholder="input your password" v-model="password">
    <button @click="login()">Login</button>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      let cek = this.valLogin()
      let url = 'http://localhost:3000/users/signin'
      
      if (cek) {
        axios
          .post(url, {
            email: this.email,
            password: this.password
          })
          .then(response => {
            // console.log(response.data.token)
            let token = response.data.token
  
            if (token) {
              localStorage.setItem('token', token)
              swal('Sign In', 'Sign Ip successfully', 'success')
              this.$router.push('/')
            }
          })
          .catch(error => {
            console.log(error)
            swal({
              icon: 'error',
              title: 'Oops',
              text: 'email or password is wrong'
            })
          })
      }
    },
    valLogin: function () {
      let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      let cekEmail = regEx.test(String(this.email).toLowerCase())
      if (this.email === '') {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Email must be filled'
        })
        return false
      } else if (!cekEmail) {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Email format is Wrong'
        })
        return false
      } else if (this.password === '') {
        swal({
          icon: 'error',
          title: 'Oops',
          text: 'Password must be filled'
        })
        return false
      } else {
        return true
      }
    }
  }
}
</script>
