const getters = {
  getName(state) {
    return state.name;
  },
  getCurrentUser(state) {
    return state.currentUser;
  },
  getSelectedUser(state) {
    return state.selectedUser;
  },
  getUniverse(state) {
    return state.universe;
  },
  isAdmin(state) {
    return state.currentUser.type === 'admin';
  },
};

export default getters;
