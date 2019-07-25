<template>
  <section class="Dynamic">
    <h1>Welcome to the component playground!</h1>

    <v-select v-model="selectedComponent"
            :items= componentList
             item-text="label"
             item-value="component">
    </v-select>

    <hr>
    <component :is="selectedComponent"></component>
  </section>
</template>

<script>
import Button from '@/components/dynamic/Button'
import Header from '@/components/dynamic/Header'
import Table from '@/components/dynamic/Table'

export default {
  name: 'Dynamic',
  data: function () {
    return {
      componentList: [
        { label: 'Button', component: Button },
        { label: 'Header', component: Header },
        { label: 'Table', component: Table },
        {
          label: 'TextInput',
          component: () => import('@/components/dynamic/TextInput')
        }
      ],
      selectedComponent: null
    }
  }
}
</script>
