<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-sm-7">
          <Card />
        </div>
        <div class="col-sm-5">
          <Login />
          <p></p><p></p>
          <Signup />
        </div>      
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Login,
    Signup,
    Card
  }
}
</script>
