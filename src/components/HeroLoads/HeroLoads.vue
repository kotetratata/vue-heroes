<template>
  <div>
    <input type="file" @change="setFile" class="hero-loads__input" accept=".jpg, .jpeg, .png">
    <ol>
      <li v-for="(file, index) in files" :key="index">{{file}}</li>
    </ol>
  </div>
</template>

<script src="./HeroLoads.js">
</script>

<style scoped src="./HeroLoads.scss" lang="scss">
</style>
