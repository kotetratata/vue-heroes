<template>
  <div class="app" v-if="getLogStatus">
    <Header></Header>
    <div class="nav">
      <router-link class="nav__item" to="/">Home</router-link> |
      <router-link class="nav__item" to="/about">About</router-link>
      <p @click="logOutUser">Exit</p>
    </div>
    <router-view/>
    <Footer></Footer>
  </div>
  <LogForm v-else></LogForm>
</template>

<script src="./App.js">
</script>

<style src="./App.scss" lang="scss">
</style>
