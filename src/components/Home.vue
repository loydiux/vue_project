<template>
  <v-app id="inspire" class="green lighten-3">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      class="light-green lighten-4"
    >
      <v-list dense>
        <v-list-tile @click="submit">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="green" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content fill-height>
      <div v-if="create"> 
        <dynamic style="padding-bottom: 100px"></dynamic>
        <v-btn 
        style="margin-left:85%"
        color="success"
        @click="addUser()"
              >Add user
        </v-btn>
      </div>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Dynamic from '@/components/dynamic/Table'

  export default {
      components:{
          Dynamic
      },
    data: () => ({
      drawer: null,
      create:true
    }),
    props: {
      source: String
    },
    methods:{
      submit () {
        this.$router.push('/Users');
      },
      addUser(){
        console.log('click')
        this.create=false;
      }
    }
  }
</script>