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
