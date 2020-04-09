<template>
  <div>
    <p
      v-for="error in errors"
      :key="error.length">
      {{error}}
    </p>
    <p>
      <label for="login">Введите логин:</label>
      <input type="text" id="login" v-model="login">
    </p>

    <p>
      <label for="password">Введите пароль:</label>
      <input type="password" id="password" v-model="password">
    </p>
    <button @click="verify">Отправить</button>
  </div>
</template>

<script>
import users from '@/assets/users';

export default {
  name: 'Log-form',
  data() {
    return {
      errors: [],
      login: '',
      password: '',
      users,
    };
  },
  methods: {
    changeStatus() {
      this.$emit('change-log-status');
    },
    checkLogin() {
      return this.login === this.users[0].login;
    },
    checkPassword() {
      return this.password === this.users[0].password;
    },
    verify() {
      this.errors = [];
      if (!this.checkLogin()) {
        this.errors.push('wrong login');
        return;
      }
      if (!this.checkPassword()) {
        this.errors.push('wrong password');
        return;
      }
      this.changeStatus();
    },
  },
};
</script>

<style scoped lang="scss">
</style>
