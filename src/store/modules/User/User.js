import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const User = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default User;
