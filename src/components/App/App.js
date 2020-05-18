import heroes from '@/assets/heroes-list';
import Header from '@/components/Header/Header.vue';
import Navigation from '@/components/Navigation/Navigation.vue';
import Footer from '@/components/Footer/Footer.vue';
import LogForm from '@/components/Login/Login.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'main',
  created() {
    heroes.forEach((elem) => this.addToUnselected(elem));
  },
  methods: {
    ...mapActions('Dashboard', [
      'addToUnselected',
    ]),
  },
  computed: {
    ...mapGetters([
      'getLogStatus',
    ]),
    ...mapGetters('User', [
      'getUniverse',
    ]),
  },
  components: {
    LogForm,
    Header,
    Footer,
    Navigation,
  },
};
