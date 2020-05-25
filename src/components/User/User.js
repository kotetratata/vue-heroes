import { mapGetters } from 'vuex';
import UserAccount from '../UserAccount/UserAccount.vue';
import UserInformation from '../UserInformation/UserInformation.vue';
import UserLoads from '../UserLoads/UserLoads.vue';
import userTabs from '../../static/user-tab-list';
import users from '../../mock/users';

export default {
  name: 'User',
  data() {
    return {
      userTabs,
      users,
      currentTab: userTabs[0].component,
    };
  },
  computed: {
    ...mapGetters('User', [
      'getSelectedUser',
    ]),
  },
  methods: {
    getId() {
      return this.$route.params.id;
    },
    changeTab(index) {
      this.currentTab = this.userTabs[index].component;
    },
  },
  components: {
    UserAccount,
    UserInformation,
    UserLoads,
  },
};
