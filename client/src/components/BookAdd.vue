<template>
  <div>
    <input type="text" placeholder="input judul" v-model="judul"><br>
    <input type="text" placeholder="input penerbit" v-model="penerbit">
    <input type="text" placeholder="input penulis" v-model="penulis">
    <input type="text" placeholder="input deskripsi" v-model="deskripsi">
    <!-- <input type="file" v-model="imgurl"> -->
    
  </div>
</template>

<script>
export default {
  name: 'BookAdd',
  data () {
    return {
      judul: '',
      penerbit: '',
      penulis: '',
      deskripsi: '',
      imgurl: ''
    }
  }
}
</script>
