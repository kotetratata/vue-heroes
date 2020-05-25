import heroes from '../../mock/heroes-list';
import heroTabs from '../../static/hero-tab-list';
import HeroAccount from '../HeroAccount/HeroAccount.vue';
import HeroInformation from '../HeroInformation/HeroInformation.vue';
import HeroLoads from '../HeroLoads/HeroLoads.vue';

export default {
  name: 'Hero',
  data() {
    return {
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
    goHome() {
      this.$router.push('/');
    },
  },
  components: {
    HeroAccount,
    HeroInformation,
    HeroLoads,
  },
};
