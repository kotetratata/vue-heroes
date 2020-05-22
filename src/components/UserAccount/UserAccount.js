import { mapGetters } from 'vuex';

export default {
  name: 'UserAccount',
  props: {
    user: Object,
  },
  computed: {
    ...mapGetters('User', [
      'isAdmin',
    ]),
  },
};
