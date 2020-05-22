const actions = {
  setUser(context, user) {
    context.commit('setUser', user);
  },
  setSelectedUser(context, user) {
    context.commit('setSelectedUser', user);
  },
  setUniverse(context, universe) {
    context.commit('setUniverse', universe);
  },
};

export default actions;
