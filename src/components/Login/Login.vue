<template>
  <div class="login-form">
    <p>
      <label for="login">Enter login:</label>
      <br>
      <input type="text" id="login" v-model="login" :class="{ error: loginError}">
      <br>
      <span v-if="loginError">wrong login</span>
    </p>
    <p>
      <label for="password">Enter password:</label>
      <br>
      <input type="password" id="password" v-model="password" :class="{ error: passwordError}">
      <br>
      <span v-if="passwordError">wrong password</span>
    </p>
    <select v-model="selectedUniverse">
      <option value="DC">DC</option>
      <option value="marvel">marvel</option>
    </select>
    <button @click="verifyUser">Send</button>
  </div>
</template>

<script src="./Login.js">
</script>

<style scoped src="./Login.scss" lang="scss">
</style>
