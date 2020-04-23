import users from '@/assets/users';
import { mapActions } from 'vuex';

export default {
  name: 'Log-form',
  data() {
    return {
      verificationErrors: [],
      selectedUniverse: 'DC',
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
      return this.users.findIndex((elem) => elem.login === this.login);
    },
    checkPassword(index) {
      return this.password === this.users[index].password;
    },
    pushVerificationError(error) {
      this.verificationErrors.push(error);
    },
    verify() {
      const index = this.getLoginIndex();
      const notFound = -1;
      this.verificationErrors = [];

      if (index === notFound) {
        this.pushVerificationError('wrong login');
        return;
      }

      if (!this.checkPassword(index)) {
        this.pushVerificationError('wrong password');
        return;
      }

      this.setUser(this.users[index]);
      this.setUniverse(this.selectedUniverse);

      this.logInUser();
    },
  },
};
