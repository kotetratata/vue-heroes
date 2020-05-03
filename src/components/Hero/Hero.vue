<template>
  <div class="hero-card">
    <p class="hero-card__name">
      {{getName()}}
    </p>
    <div style="display: flex; margin: auto; width: 340px;">
      <p style="width: 100px;"
         v-for="(item,index) in heroTabs"
         :key="index"
         @click="changeTab(index)"
      >
        {{item.title}}
      </p>
    </div>
    <h2>{{currentTab}}</h2>
    <component :is="currentTab"></component>
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
