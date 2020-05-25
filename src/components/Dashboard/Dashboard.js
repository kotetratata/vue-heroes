import heroes from '../../mock/heroes-list';
import { AgGridVue } from 'ag-grid-vue';
import Group from '../Group/Group.vue';

export default {
  name: 'Dashboard',
  data() {
    return {
      heroes,
      gridOptions: {
        rowData: [...heroes],
        columnDefs: [
          { headerName: 'Id', field: 'id', sortable: true },
          { headerName: 'Name', field: 'name', sortable: true },
        ],
        onRowDoubleClicked: ({ data: { id } }) => this.routeToHeroCard(id),
      },
    };
  },
  methods: {
    routeToHeroCard(id) {
      this.$router.push(`/hero/${id}`);
    },
  },
  components: {
    Group,
    AgGridVue,
  },
};
