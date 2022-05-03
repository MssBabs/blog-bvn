<template>
  <div class="container">
    <Head />
    <NavBar />

    <main class="container">
        <BodyCategory />

        <div class="row mb-2">
            <PostPreview />
            <PostPreview />
        </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Head from "../components/viewsComponents/layout/Head.vue"
import NavBar from "../components/viewsComponents/layout/NavBar.vue"
import Footer from "../components/viewsComponents/layout/Footer.vue"

import PostPreview from "../components/viewsComponents/PostPreview.vue"
import BodyCategory from "../components/viewsComponents/BodyCategory.vue"


export default {
  name: 'HomeView',
  components: {
    Head, NavBar, Footer,
    PostPreview, BodyCategory
  }
}
</script>
