<template>
  <Navbar/>
<!--  {{$store.state}}-->

  <router-view class="container"/>
</template>
<script>
import Navbar from "@/components/Navbar";
export default {
  name:'App',
  components:{
    Navbar
  },
  watch:{
      $route(){
        this.$store.commit('onStart')
      }
  },
  mounted() {
    this.$store.commit("onStart")
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}



nav a {
  font-weight: bold;
  color: #2c3e50;
}
.navbar-brand{
  color: #000000;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
