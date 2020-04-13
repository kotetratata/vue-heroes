<template>
  <div>
     <GroupEditor v-if="editor"></GroupEditor>
    <div v-if="!(currentGroup.length)">
      <button @click="activateEditor">Создать группу</button>
    </div>
    <div v-else>
      <ul>
        <li
          v-for="(hero, index) in currentGroup"
          :key="index">
          {{hero.name}}
          ></li>
      </ul>
      <button @click="activateEditor">Редактировать группу</button>
      <br>
      <button @click="clearGroup">Удалить группу</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import GroupEditor from './GroupEditor.vue';

export default {
  name: 'Group',
  computed: {
    ...mapGetters('Dashboard', {
      currentGroup: 'getGroup',
      editor: 'getEditor',
    }),
  },
  methods: {
    ...mapActions('Dashboard', [
      'activateEditor',
      'clearGroup',
    ]),
  },
  components: {
    GroupEditor,
  },
};
</script>

<style scoped lang="scss">
</style>
