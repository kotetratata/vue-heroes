import users from '@/assets/users';
import { mapActions } from 'vuex';

export default {
  name: 'Log-form',
  data() {
    return {
      errors: [],
      selected: 'DC',
      login: '',
      password: '',
      users,
    };
  },
  methods: {
    ...mapActions([
      'logInUser',
    ]),
    ...mapActions('User', [
      'setUser',
      'setUniverse',
    ]),
    getLoginIndex() {
      return users.findIndex((elem) => elem.login === this.login);
    },
    checkPassword(index) {
      return this.password === this.users[index].password;
    },
    checkCredentials(index) {
      if (index === -1) {
        this.errors.push('wrong login');
        return false;
      }

      if (!this.checkPassword(index)) {
        this.errors.push('wrong password');
        return false;
      }

      return true;
    },
    verify() {
      this.errors = [];
      const index = this.getLoginIndex();

      if (!this.checkCredentials(index)) {
        return;
      }

      this.setUser(users[index]);
      this.setUniverse(this.selected);

      this.logInUser();
    },
  },
};
