import heroes from '../../mock/heroes-list';
import Header from '../Header/Header.vue';
import Navigation from '../Navigation/Navigation.vue';
import Footer from '../Footer/Footer.vue';
import LogForm from '../Login/Login.vue';
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
