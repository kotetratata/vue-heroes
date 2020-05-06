import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HeroLoads',
  data() {
    return {
      loads: [],
    };
  },
  props: {
    id: String,
  },
  computed: {
    ...mapGetters('Hero', [
      'getCurrentLoads',
      'getAllLoads',
    ]),
  },
  methods: {
    setFile() {
      const input = document.querySelector('.hero-loads__input');

      this.addLoad({
        id: this.id,
        value: input.files[0].name,
      });

      if (!this.loads.length) {
        this.loads = this.getCurrentLoads(this.id);
      }

      input.value = '';
    },
    ...mapActions('Hero', [
      'addLoad',
    ]),
  },
};
