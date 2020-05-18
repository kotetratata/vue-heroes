<template>
  <div class="nav">
    <div class="nav__border">
      <div class="nav__items">
        <router-link class="nav__item" to="/">Home</router-link> |
        <router-link class="nav__item" to="/about">About</router-link>
      </div>
      <p @click="logOutUser">Exit</p>
    </div>
  </div>
</template>

<script src="./Navigation.js">
</script>

<style scoped src="./Navigation.scss" lang="scss">
</style>
