import heroes from '@/assets/heroes-list';
import { AgGridVue } from 'ag-grid-vue';
import Group from '../Group/Group.vue';

export default {
  name: 'Dashboard',
  data() {
    return {
      heroes,
      columnDefs: [],
      rowData: null,
      gridOptions: {
        columnDefs: [
          { headerName: 'Id', field: 'id', sortable: true },
          { headerName: 'Name', field: 'name', sortable: true },
        ],
        onRowDoubleClicked: ({ data: { id } }) => this.routeToHeroCard(id),
      },
    };
  },
  beforeMount() {
    this.columnDefs = [
      { headerName: 'Id', field: 'id', sortable: true },
      { headerName: 'Name', field: 'name', sortable: true },
    ];

    this.rowData = [...heroes];
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
