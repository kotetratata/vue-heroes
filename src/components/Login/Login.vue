<template>
  <div>
    <p
      v-for="error in verificationErrors"
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
    <select v-model="selectedUniverse">
      <option value="DC">DC</option>
      <option value="marvel">marvel</option>
    </select>
    <button @click="verify">Отправить</button>
  </div>
</template>

<script src="./Login.js">
</script>

<style scoped src="./Login.scss" lang="scss">
</style>
