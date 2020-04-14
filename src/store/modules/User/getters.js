const getters = {
  getName(state) {
    return state.name;
  },
  getUserInfo(state) {
    return state.currentUser;
  },
  getUniverse(state) {
    return state.universe;
  },
};

export default getters;
