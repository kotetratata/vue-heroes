const mutations = {
  addLoad(state, loadObj) {
    const currentHeroLoads = state.loads[loadObj.id] || [];

    if (currentHeroLoads.length < 5) {
      currentHeroLoads.push(loadObj.value);
    }
    state.loads[loadObj.id] = currentHeroLoads;
  },
};

export default mutations;
