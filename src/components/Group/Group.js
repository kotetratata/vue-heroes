import { mapActions, mapGetters } from 'vuex';
import GroupEditor from '../GroupEditor/GroupEditor.vue';

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
