<template>
  <div>
    <Header />
    <!-- Container / body -->
    <div>
      <!-- Content of the page -->
      <nuxt />
    </div>
  </div>
</template>
<script>
import Header from "~/components/HeaderBlack.vue"
export default { components: { Header } }
</script>
