<script setup lang="ts">
import MainNav from "@/layouts/MainNav.vue";
</script>

<template>
  <header class="main-head">
    <figure class="img-container">
      <img src="/assets/images/carrot01.png" alt="carottes !" class="pixel-img">
    </figure>
  </header>
  <MainNav />
  <main>
    <router-view />
  </main>
</template>
