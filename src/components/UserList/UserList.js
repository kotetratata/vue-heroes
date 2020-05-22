import users from '@/assets/users';
import { AgGridVue } from 'ag-grid-vue';
import { mapActions } from 'vuex';

export default {
  name: 'UserList',
  data() {
    return {
      users,
      columnDefs: [
        {
          headerName: 'Id', field: 'id', resizable: true, sortable: true, width: 100,
        },
        {
          headerName: 'Name', field: 'name', sortable: true, width: 100,
        },
        { headerName: 'Surname', field: 'surname', sortable: true },
        { headerName: 'Login', field: 'login', sortable: true },
        { headerName: 'Password', field: 'password', sortable: true },
        {
          headerName: 'Status', field: 'status', sortable: true, width: 100,
        },
        { headerName: 'Type', field: 'type', sortable: true },
      ],
      rowData: [...users],
      gridOptions: {
        onRowDoubleClicked: ({ data: { id } }) => this.changeUserCard(id),
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
