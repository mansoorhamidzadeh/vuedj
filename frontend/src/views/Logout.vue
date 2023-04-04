<template>
  <div class="logout">
    <h1>Logout</h1>
    <button class="btn btn-danger" @click="dologout">Logout</button>
  </div>
</template>

<script>
export default {
  name:'logout',
  methods:{
    dologout(){
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  }
}
</script>