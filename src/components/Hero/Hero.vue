<template>
  <div class="hero-card">
    <p class="hero-card__name">
      {{getName()}}
    </p>
    <div style="display: flex; margin: auto; width: 340px;">
      <p style="width: 100px; border: 1px solid black;"
         v-for="(item,index) in heroTabs"
         :key="index"
         @click="changeTab(index)"
      >
        {{item.title}}
      </p>
    </div>
    <h2>{{currentTab}}</h2>
    <keep-alive>
      <component :is="currentTab" :id="getId()"></component>
    </keep-alive>
    <router-link to="/">home</router-link>
  </div>
</template>

<script src="./Hero.js">
</script>

<style scoped src="./Hero.scss" lang="scss">
</style>
