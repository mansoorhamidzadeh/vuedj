<template>
  <div class="login">

    <div class="row">
      <div class="col-lg-4 mx-auto border shadow rounded p-4 mt-4">
        <h1 class="text-center mt-3 mb-4">Login</h1>
        <form @submit.prevent="dologin">
          <div class="form-group">
            <label for="usernameInput">username</label>
            <input
                type="text"
                class="form-control"
                id="usernameInput"
                v-model="username"
                :class="{
                  'is-invalid':usernameE===true,
                  'is-valid':usernameE===false,
                }">
            <div class="invalid-feedback" v-if="usernameE">
              {{usernameM}}
            </div>

          </div>
          <div class="form-group">
            <label for="passwordInput">Password</label>
            <input
                type="password"
                class="form-control"
                id="passwordInput"
                v-model="password"
                :class="{
                  'is-invalid':passwordE===true,
                  'is-valid':passwordE===false,
                }">
          </div>

          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      usernameE: null,
      passwordE: null,
      usernameM: null,
      passwordM: null
    }
  },
  methods: {
     dologin() {
       let access=true
      // console.log(this.username)
      // console.log(this.password)
      if (this.username.length < 5) {
        access=false
        this.usernameE = true
        if (this.username.length == 0) {
          this.usernameM = 'Username requierd'
        } else {
          this.usernameM = 'username must be at least 5 character long'
        }
      } else {
        this.usernameE = false
        this.usernameM = ''
      }
      if (this.password.length < 6) {
        access=false
        this.passwordE = true
        if (this.password.length == 0) {
          this.passwordM = 'passoword requierd'
        } else {
          this.passwordM = 'passoword must be at least 6 character long'
        }
      } else {
        this.passwordE = false
        this.passwordM = ''
      }
      this.$store.commit('login',`${this.username}:${this.password}`)
      this.$router.push('/profile')
    }
  }
}
</script>