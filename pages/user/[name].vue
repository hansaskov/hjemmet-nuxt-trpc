<script setup lang="ts">
const route = useRoute()

const name = route.params.name
</script>

<template>
    <div>
       {{name}}'s page
    </div>
</template>