import { mapActions, mapGetters } from 'vuex';
import heroes from '@/assets/heroes-list';

export default {
  name: 'GroupEditor',
  data() {
    return {
      heroes,
    };
  },
  computed: {
    ...mapGetters('Dashboard', [
      'getGroup',
      'getUnselected',
    ]),
  },
  methods: {
    ...mapActions('Dashboard', [
      'addHeroToGroup',
      'removeHeroFromGroup',
      'addToUnselected',
      'removeFromUnselected',
      'deActivateEditor',
    ]),
    selectHero(hero, index) {
      this.addHeroToGroup(hero);
      this.removeFromUnselected(index);
    },
    unSelectHero(hero, index) {
      this.addToUnselected(hero);
      this.removeHeroFromGroup(index);
    },
  },
};
