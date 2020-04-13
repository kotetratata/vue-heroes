const actions = {
  addHeroToGroup(context, hero) {
    context.commit('addHeroToGroup', hero);
  },
  removeHeroFromGroup(context, index) {
    context.commit('removeHeroFromGroup', index);
  },
  addToUnselected(context, hero) {
    context.commit('addToUnselected', hero);
  },
  removeFromUnselected(context, index) {
    context.commit('removeFromUnselected', index);
  },
  activateEditor(context) {
    context.commit('setEditor', true);
  },
  deActivateEditor(context) {
    context.commit('setEditor', false);
  },
  clearGroup(context) {
    context.commit('clearGroup');
  },
};

export default actions;
