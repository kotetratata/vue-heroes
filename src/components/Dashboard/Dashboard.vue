<template>
  <div>
    <ag-grid-vue class="ag-theme-balham dashboard"
                 :columnDefs="columnDefs"
                 :rowData="rowData"
                 :gridOptions="gridOptions">
    </ag-grid-vue>
    <Group></Group>
  </div>
</template>

<script src="./Dashboard.js">
</script>

<style scoped src="./Dashboard.scss" lang="scss">
</style>
