<template>
  <Hero
    @click-New-Arrivals="clickNewArrivals"
    @click-Best-Sellers="clickBestSellers"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Steven Stone Test',
  components: {},
  data() {
    return {
      showNewArrivalsBtn: true,
      showBestSellerBtn: true,
    }
  },
  methods: {
    clickNewArrivals() {
      console.log('im coming from light blue button')
    },
    clickBestSellers() {
      console.log('im coming from the transparent button')
    },
  },
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');
@font-face {
  font-family: 'Numans';
  src: local('Numans'),
    url(~assets/fonts/numans/Numans-Regular.ttf) format('truetype');
}
body,
html {
  scroll-behavior: smooth;
  height: 100%;
  max-width: 100%;
  width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: 'Numans', Arial, Helvetica, sans-serif;
  color: #000000;
  margin: 0;
  background-color: #f9f9f9;
  padding: 0;
}
h1,
h2,
h3,
p {
  margin: 0;
  padding: 0;
}
</style>
