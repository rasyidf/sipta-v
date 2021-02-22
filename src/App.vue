<template>
  <div class="page">
    <Navbar />
    <Header />
    <div class="content">
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import "@tabler/icons/iconfont/tabler-icons.css";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    Footer,
    Navbar,
    Header,
  },
};
</script>

<style>
</style>
