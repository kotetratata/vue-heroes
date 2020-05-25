import { mapActions } from 'vuex';
import { AgGridVue } from 'ag-grid-vue';
import users from '../../mock/users';
import columnDefs from '../../static/user-list-grid-col-data';


export default {
  name: 'UserList',
  data() {
    return {
      users,
      gridOptions: {
        columnDefs: [...columnDefs],
        rowData: [...users],
        onRowClicked: ({ data: { id } }) => this.changeUserCard(id),
      },
    };
  },
  methods: {
    ...mapActions('User', [
      'setSelectedUser',
    ]),
    changeUserCard(id) {
      this.setSelectedUser(this.users[id - 1]);
    },
  },
  components: {
    AgGridVue,
  },
};
