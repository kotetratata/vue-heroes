const actions = {
  setUser(context, user) {
    context.commit('setUser', user);
  },
  setUniverse(context, universe) {
    context.commit('setUniverse', universe);
  },
};

export default actions;
