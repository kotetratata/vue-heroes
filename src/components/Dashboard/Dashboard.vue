<template>
  <div>
    <ag-grid-vue style="width: 400px; height:335px; margin: auto;"
                 class="ag-theme-balham"
                 :columnDefs="columnDefs"
                 :rowData="rowData"
                 :gridOptions="gridOptions"
    >
    </ag-grid-vue>
    <Group></Group>
  </div>
</template>

<script src="./Dashboard.js">
</script>

<style scoped src="./Dashboard.scss" lang="scss">
</style>
