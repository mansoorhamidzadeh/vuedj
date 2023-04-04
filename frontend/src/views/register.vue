<template>
  <div class="login">

    <div class="row">
      <div class="col-lg-4 mx-auto border shadow rounded p-4 mt-4">
        <h1 class="text-center mt-3 mb-4">Register</h1>
        <form @submit.prevent="doRegister">
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
              {{ usernameM }}
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
          <div class="form-group">
            <label for="passwordInput2">Password2</label>
            <input
                type="password"
                class="form-control"
                id="passwordInput2"
                v-model="password2"
                :class="{
                  'is-invalid':passwordE2===true,
                  'is-valid':passwordE2===false,
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
  name: 'Register',
  data() {
    return {
      username: '',
      password: '',
      password2: '',
      usernameE: null,
      passwordE: null,
      passwordE2: null,
      usernameM: null,
      passwordM: null,
      passwordM2: null
    }
  },
  methods: {
    doRegister() {
      let access = true
      // console.log(this.username)
      // console.log(this.password)
      if (this.username.length < 5) {
        access = false
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
        access = false
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
      if (this.password2.length < 6) {
        access = false
        this.passwordE2 = true
        if (this.password2.length == 0) {
          this.passwordM2 = 'passoword requierd'
        } else {
          this.passwordM2 = 'passoword must be at least 6 character long'
        }
      } else {
        this.passwordE2 = false
        this.passwordM2 = ''
      }
      if (this.password != this.password2) {
        access = false
        this.passwordE = true
        this.passwordE2 = true
        this.passwordM2 = 'passwords arent same'
      } else {
        if (!this.passwordM && this.passwordM2) {
          this.passwordM = ""
        }
      }
      if (access) {


        this.$store.commit('login', `${this.username}:${this.password}`)
        this.$router.push('/profile')
      }
    }
  }
}
</script>