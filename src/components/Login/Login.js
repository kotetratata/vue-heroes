import { mapActions } from 'vuex';
import users from '../../mock/users';

export default {
  name: 'Log-form',
  data() {
    return {
      selectedUniverse: 'DC',
      login: '',
      password: '',
      loginError: false,
      passwordError: false,
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
      'setSelectedUser',
    ]),
    getLoginUser() {
      return this.users.find(({ login }) => login === this.login);
    },
    checkPassword({ password }) {
      return this.password === password;
    },
    verifyUser() {
      this.loginError = false;
      this.passwordError = false;
      const user = this.getLoginUser();

      if (!user) {
        this.loginError = true;
        return;
      }

      if (!this.checkPassword(user)) {
        this.passwordError = true;
        return;
      }

      this.setUser(user);
      this.setSelectedUser(user);
      this.setUniverse(this.selectedUniverse);

      this.logInUser();
    },
  },
};
