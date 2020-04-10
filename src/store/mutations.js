const mutations = {
  logUser(state) {
    state.isLogged = true;
  },
  logOutUser(state) {
    state.isLogged = false;
  },
  setLogStatus(state, value) {
    state.isLogged = value;
  },
};

export default mutations;
