<template>
  <div>
    <Header />
    <!-- Container / body -->
    <div
      class="container main has-shadow has-background-primary-gradient is-fluid"
    >
      <!-- Content of the page -->
      <nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"
export default { components: { Header, Footer } }
</script>
