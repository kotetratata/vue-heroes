<template>
  <div>
    <router-link
      v-for="hero in heroes"
      :to="'/hero/'+hero.id"
      :key="hero.id"
      :hero="hero">
      {{hero.name}}
      <br>
    </router-link>
  </div>
</template>

<script>

import heroes from '@/assets/heroes-list';

export default {
  name: 'Dashboard',
  data() {
    return {
      heroes,
    };
  },
};
</script>

<style scoped>
  p {
    padding: 5px;
    text-align: left;
    color: red;
  }
  p:hover{
    background-color: lightgray;
  }
</style>
