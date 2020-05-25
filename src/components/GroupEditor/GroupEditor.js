import { mapActions, mapGetters } from 'vuex';
import { AgGridVue } from 'ag-grid-vue';
import heroes from '../../mock/heroes-list';

export default {
  name: 'GroupEditor',
  data() {
    return {
      heroes,
      selectedColumnDefs: null,
      selectedRowData: null,
      selectedGridOptions: {
        onCellClicked: (event) => this.unSelectHero(event.data, event.rowIndex),
      },
      unSelectedColumnDefs: null,
      unSelectedRowData: null,
      unSelectedGridOptions: {
        onCellClicked: (event) => this.selectHero(event.data, event.rowIndex),
      },
    };
  },
  created() {
    this.selectedColumnDefs = [
      { headerName: 'Selected heroes', field: 'name', sortable: true },
    ];
    this.unSelectedColumnDefs = [
      { headerName: 'Unselected heroes', field: 'name', sortable: true },
    ];
    this.selectedRowData = this.getGroup;
    this.unSelectedRowData = this.getUnselected;
  },
  computed: {
    ...mapGetters('Dashboard', [
      'getGroup',
      'getUnselected',
    ]),
  },
  methods: {
    ...mapActions('Dashboard', [
      'addHeroToGroup',
      'removeHeroFromGroup',
      'addToUnselected',
      'removeFromUnselected',
      'deActivateEditor',
    ]),
    selectHero(hero, index) {
      this.addHeroToGroup(hero);
      this.removeFromUnselected(index);
    },
    unSelectHero(hero, index) {
      this.addToUnselected(hero);
      this.removeHeroFromGroup(index);
    },
  },
  components: {
    AgGridVue,
  },
};
