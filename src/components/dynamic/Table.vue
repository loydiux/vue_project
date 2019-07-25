<template>
<v-container>
    <v-data-table
    :headers="headers"
    :items="users"
    hide-actions
    class="elevation-1 light-green lighten-4"
  >
    <template slot="items" slot-scope="props" >
      <td class="light-green lighten-4">{{ props.item.nombre_usuario }}</td>
      <td class="text-xs-right light-green lighten-4">{{ props.item.nombre }}</td>
      <td class="text-xs-right light-green lighten-4">{{ props.item.apellido }}</td>
      <td class="text-xs-right light-green lighten-4">{{ props.item.email }}</td>
      <td class="text-xs-right light-green lighten-4">{{ props.item.estatus }}</td>
    </template>
  </v-data-table>
</v-container>

</template>

<script>
  import { userService } from '@/services'

  export default {
   name: 'Table',
    data () {
      return {
        headers: [
          {
            text: 'User name',
            align: 'left',
            sortable: false,
            value: 'nombre_usuario', 
            class: 'green darken-2'
          },
          { text: 'Name', value: 'nombre', class: 'green darken-2' },
          { text: 'Last Name', value: 'apellido', class: 'green darken-2' },
          { text: 'Email', value: 'email', class: 'green darken-2' },
          { text: 'Status', value: 'estatus', class: 'green darken-2' }
        ],
        users:this.getData()
      }
    },
    methods: {
    getData(){
     userService.getAllUsers().then(({ data }) => {
      this.users= data.usuario;
    }).catch(res => {
        this.users=[];
        });
    }
    }
  }
</script>