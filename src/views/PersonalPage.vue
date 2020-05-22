<template>
  <div>
    <h2>Personal Page</h2>
    <UserList v-if="isAdmin" ></UserList>
    <User></User>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserList from '../components/UserList/UserList.vue';
import User from '../components/User/User.vue';

export default {
  name: 'PersonalPage',
  computed: {
    ...mapGetters('User', [
      'isAdmin',
      'getSelectedUser',
    ]),
  },
  components: {
    UserList,
    User,
  },
};
</script>
