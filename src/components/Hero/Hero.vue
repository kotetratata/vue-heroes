<template>
  <div class="hero-card">
    <h3 class="hero-card__name">
      {{getName()}}
    </h3>
    <div class="tab-container">
      <p class="tab-container__item"
         v-for="(item,index) in heroTabs"
         :key="index"
         @click="changeTab(index)">
        {{item.title}}
      </p>
    </div>
    <h2>{{currentTab}}</h2>
    <keep-alive>
      <component :is="currentTab" :id="getId()"></component>
    </keep-alive>
    <button @click="goHome">home</button>
  </div>
</template>

<script src="./Hero.js">
</script>

<style scoped src="./Hero.scss" lang="scss">
</style>
