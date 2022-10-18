<script setup lang="ts">
const isNavBarOpen = useIsNavOpen()

</script>


<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div v-on:click="isNavBarOpen = false">
      <slot />
      <Footer />
    </div>
  </div>
</template>
  