const mutations = {
  addLoad(state, loadObj) {
    const currentHeroLoads = state.loads[loadObj.id] || [];

    console.log(currentHeroLoads, loadObj.value);
    if (currentHeroLoads.length < 5) {
      currentHeroLoads.push(loadObj.value);
    }
    state.loads[loadObj.id] = currentHeroLoads;
    console.log(state);
    console.log('this is state');
  },
};

export default mutations;
