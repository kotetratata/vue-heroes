const mutations = {
  setUser(state, user) {
    state.currentUser = user;
  },
  setSelectedUser(state, user) {
    state.selectedUser = user; // temporary
  },
  setUniverse(state, universe) {
    state.universe = universe;
  },
};

export default mutations;
