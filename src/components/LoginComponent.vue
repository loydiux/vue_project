<template>

<v-content class= "grey lighten-2">
      <div style="padding-left: 43%">
      <img src="@/assets/logo.png" >
      <h3><p style="color:grey; font-size:30px">Welcome to Vue</p></h3>
      </div>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12 sm8 md4>   
            <v-card class="elevation-12 grey lighten-4">
              <v-toolbar dark color="success">
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn 
                    slot="activator"
                    icon
                    large
                    target="_blank"
                  >
                    <v-icon large>code</v-icon>
                  </v-btn>
                </v-tooltip>
                <v-tooltip right>
                  <span>Codepen</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
    <v-form ref="form" @submit.prevent="submit">
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      box label="E-mail"
      color="purple darken-2"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
        <v-text-field
      box label=" Password"
      :append-icon="e4 ? 'visibility' : 'visibility_off'"
      :append-icon-cb="() => (e4 = !e4)"
      v-model="password"
      :error-messages="passwordErrors"
      :counter="10"
      :type="e4 ? 'password' : 'text'"
      color="purple darken-2"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>
 <v-snackbar
      :timeout="timeout"
      :color="color"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      :top="true"
      :right="true"
      v-model="snackbar"
    >
      {{ text }}
      <v-btn dark flat @click.native="snackbar = false">Cerrar</v-btn>
    </v-snackbar>
    </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn :disabled="!formIsValid"
                        @click="submit"
                        color="success">Login</v-btn>
                    <v-btn @click="clear" color="success">clear</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
   
</template>







<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import { loginService } from '@/services'
  

  export default {
    mixins: [validationMixin],

    validations: {
      password: { required, maxLength: maxLength(10) },
      email: { required, email }
    },

    data: () => ({
      password: '',
      email: '',
      e4:false,
      snackbar: false,
        color: 'error',
        mode: '',
        timeout: 6000,
        text: 'Hello, I\'m a snackbar'
    }),

    computed: {
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.maxLength && errors.push('Password must be at most 10 characters long')
        !this.$v.password.required && errors.push('Password is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty)return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
        formIsValid () {
        return (
           this.$v.password.maxLength &&
           this.$v.email.email
        )
      }
    },
    methods: {
      submit () {
        this.$v.$touch()
            loginService.login(this.email, this.password).then(({ data }) => {
             console.log('data', data)
             this.$router.push('/Users');
         }).catch(res => {
           this.assignNotify('error','Credenciales inválidas')
         })
      },
      assignNotify(status, message){
      this.snackbar=true;
      this.color=status;
      this.text=message;
      },
      clear () {
        this.$v.$reset()
        this.password = ''
        this.email = ''
      }
    }
  }
</script>

