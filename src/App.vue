<template>
  <div class="mx-auto  md:max-w-screen-2xl overflow-hidden">
    
  <Nav />
    <div class="md:grid md:grid-cols-2 md:gap-32 gap-16 flex flex-col flex-col-reverse">
      <ItemLeft />
      <ItemRight />
    </div>
  </div>

</template>

<script>
import Nav from './components/Nav.vue'
import ItemLeft from './components/ItemLeft.vue'
import ItemRight from './components/ItemRight.vue'
export default {
  name: 'App',
  components: {
    Nav,
    ItemLeft,
    ItemRight
  }
}
</script>

<style>

</style>
