<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <BookAdd />

        </div>      
      </div>
    </div>
  </div>
</template>

<script>
import BookAdd from '@/components/BookAdd.vue'

export default {
  name: 'user',
  components: {
    BookAdd,
  }
}
</script>
