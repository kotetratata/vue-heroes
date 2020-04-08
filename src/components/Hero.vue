<template>
  <div class="hero-card">
    <p class="hero-card__message">
      some1 clicked on "hero"
    </p>
    <p class="hero-card__name">
      {{heroes[$route.params.id-1].name}}
    </p>
    <p class="hero-card__id">
      with id {{$route.params.id}}
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
    &__message{
      color: #000eff;
      font-size: 30px;
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
