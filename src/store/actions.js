const actions = {
  logInUser(context) {
    context.commit('setLogStatus', true);
  },
  logOutUser(context) {
    context.commit('setLogStatus', false);
  },
};

export default actions;
