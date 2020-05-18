import { mapActions } from 'vuex';

export default {
  name: 'Navigation',
  methods: {
    ...mapActions([
      'logOutUser',
    ]),
  },
};
