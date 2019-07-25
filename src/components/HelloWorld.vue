<template>
  <div class="HelloWorld">
    <login-component
      :errorMessage="errorMessage"
      v-on:loginCredentials="checkCredentials"
      passwordPattern=".{2,8}"
      passwordMessage="Greater than 1 and less than 9"
    ></login-component>
  </div>
</template>

<script>
  import LoginComponent from './LoginComponent.vue'

export default {
  name: 'HelloWorld',
  components: {
    LoginComponent,
    'login-component': LoginComponent
  },
  data () {
    return {
      errorMessage: ''
    }
  },
  methods: {
    checkCredentials: function (event) {
      console.log('Email is: ' + event.email)
      console.log('Password is: ' + event.password)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
