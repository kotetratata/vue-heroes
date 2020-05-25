import heroes from '@/mock/heroes-list';

const mutations = {
  addHeroToGroup(state, hero) {
    state.group.push(hero);
  },
  removeHeroFromGroup(state, index) {
    state.group.splice(index, 1);
  },
  addToUnselected(state, hero) {
    state.unselectedHeroes.push(hero);
  },
  removeFromUnselected(state, index) {
    state.unselectedHeroes.splice(index, 1);
  },
  setEditor(state, value) {
    state.editor = value;
  },
  clearGroup(state) {
    state.group = [];
    state.unselectedHeroes = [...heroes];
  },
};

export default mutations;
