import heroes from '@/assets/heroes-list';
import Group from '../Group/Group.vue';

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
