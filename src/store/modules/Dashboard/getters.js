const getters = {
  getName(state) {
    return state.name;
  },
  getGroup(state) {
    return state.group;
  },
  getUnselected(state) {
    return state.unselectedHeroes;
  },
  getEditor(state) {
    return state.editor;
  },
};

export default getters;
