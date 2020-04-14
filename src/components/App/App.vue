<template>
  <div id="app" v-if="checkLog">
    <Header></Header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <p @click="logOutUser">Выход</p>
    </div>
    <router-view/>
    <Footer></Footer>
  </div>
  <LogForm v-else>
  </LogForm>
</template>

<script src="./App.js">
</script>

<style src="./App.scss" lang="scss">
</style>
