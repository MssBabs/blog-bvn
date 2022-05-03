<template>
  <div class="container">
    <Head />
    <NavBar />

    <main class="container">
       
    </main>

    <Footer />
  </div>
</template>

<script>
import Head from "../components/viewsComponents/layout/Head.vue"
import NavBar from "../components/viewsComponents/layout/NavBar.vue"
import Footer from "../components/viewsComponents/layout/Footer.vue"


export default {
  name: 'AboutMeView',
    components: {
      Head, NavBar, Footer
    }
}
</script>