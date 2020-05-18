<template>
  <div class="app" v-if="getLogStatus">
    <Header></Header>
    <Navigation></Navigation>
    <router-view/>
    <Footer></Footer>
  </div>
  <LogForm v-else></LogForm>
</template>

<script src="./App.js">
</script>

<style src="./App.scss" lang="scss">
</style>
