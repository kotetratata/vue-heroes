<template>
  <div id="app" v-if="checkLogStatus()">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <p @click="logOut">{{$store.getters.checkLogStatus}}</p>
    </div>
    <router-view/>
  </div>
  <LogForm v-else>
  </LogForm>
</template>

<script>
import LogForm from '@/components/Login.vue';

export default {
  name: 'main',
  methods: {
    checkLogStatus() {
      return this.$store.getters.checkLogStatus;
    },
    logOut() {
      this.$store.commit('logOutUser');
    },
  },
  components: {
    LogForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
