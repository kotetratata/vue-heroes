<template>
  <div>
    <input type="file" @change="getFile($event)" class="hero-loads__input">
    <ol>
      <li v-for="(file, index) in files" :key="index">{{file}}</li>
    </ol>
  </div>
</template>

<script src="./HeroLoads.js">
</script>

<style scoped src="./HeroLoads.scss" lang="scss">
</style>
