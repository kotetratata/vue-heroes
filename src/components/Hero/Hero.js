import heroes from '@/assets/heroes-list';

export default {
  name: 'Hero',
  methods: {
    getName() {
      return heroes[this.$route.params.id - 1].name;
    },
    getId() {
      return this.$route.params.id;
    },
  },
};
