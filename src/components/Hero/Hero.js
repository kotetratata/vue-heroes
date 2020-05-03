import heroes from '@/assets/heroes-list';
import heroTabs from '@/assets/hero-tab-list';
import HeroAcc from '../HeroAcc/HeroAcc.vue';
import HeroInfo from '../HeroInfo/HeroInfo.vue';
import HeroLoads from '../HeroLoads/HeroLoads.vue';

export default {
  name: 'Hero',
  data() {
    return {
      heroes,
      heroTabs,
      currentTab: heroTabs[0].component,
    };
  },
  methods: {
    getName() {
      return heroes[this.$route.params.id - 1].name;
    },
    getId() {
      return this.$route.params.id;
    },
    changeTab(index) {
      this.currentTab = this.heroTabs[index].component;
    },
  },
  components: {
    HeroAcc,
    HeroInfo,
    HeroLoads,
  },
};
