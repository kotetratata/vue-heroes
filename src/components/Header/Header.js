import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters('User', [
      'getUniverse',
    ]),
  },
};
