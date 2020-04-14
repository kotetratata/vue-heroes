<template>
  <div class="hero-card">
    <p class="hero-card__name">
      {{getName()}}
    </p>
    <p class="hero-card__id">
      with id {{getId()}}
    </p>
    <router-link to="/">home</router-link>
  </div>
</template>

<script src="./Hero.js">
</script>

<style scoped src="./Hero.scss" lang="scss">
</style>
