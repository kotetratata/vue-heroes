const actions = {
  loginUser(context) {
    context.commit('setLogStatus', true);
  },
  logOutUser(context) {
    context.commit('setLogStatus', false);
  },
};

export default actions;
