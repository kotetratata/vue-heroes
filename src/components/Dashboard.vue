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

<script>
import heroes from '@/assets/heroes-list';
import Group from './Group.vue';

export default {
  name: 'Dashboard',
  data() {
    return {
      heroes,
    };
  },
  methods: {
    concatUrl(value) {
      return `/hero/${value}`;
    },
    routeToHeroCard(id) {
      this.$router.push(this.concatUrl(id));
    },
  },
  components: {
    Group,
  },
};
</script>

<style scoped lang="scss">
  .dashboard{
    padding: 0;
    &>li{
      display: block;
    }
  }
</style>
