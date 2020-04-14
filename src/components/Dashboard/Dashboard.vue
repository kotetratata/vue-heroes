<template>
  <div>
    <ul class="dashboard">
      <li
        v-for="hero in heroes"
        :key="hero.id"
        @click="routeToHeroCard(hero.id)">
        {{hero.name}}
      </li>
    </ul>
    <Group></Group>
  </div>
</template>

<script src="./Dashboard.js">
</script>

<style scoped src="./Dashboard.scss" lang="scss">
</style>
