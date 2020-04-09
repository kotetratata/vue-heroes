<template>
  <div class="hero-card">
    <p class="hero-card__name">
      {{getName()}}
    </p>
    <p class="hero-card__id">
      with id {{getId()}}
    </p>
    <router-link to="/">home</router-link>
  </div>
</template>

<script>

import heroes from '@/assets/heroes-list';

export default {
  name: 'Hero',
  data() {
    return {
      heroes,
    };
  },
  methods: {
    getName() {
      return heroes[this.$route.params.id - 1].name;
    },
    getId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style scoped lang="scss">
  p {
    padding: 5px;
  }
  .hero-card{
    width: 500px;
    margin: auto;
    border: 1px dashed red;
    &:hover{
      background-color: lightseagreen;
    }
    &__name{
      font-size: 40px;
      font-weight: bold;
      color: deeppink;
    }
    &__id{
      font-size: 70px;
    }
  }
</style>
