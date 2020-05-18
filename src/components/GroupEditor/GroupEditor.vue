<template>
  <div class="editor">
    <div class="editor__menu">
      <h2>menu</h2>
      <div class="editor__inner-cont">
        <ag-grid-vue class="ag-theme-balham column"
          :columnDefs="selectedColumnDefs"
          :rowData="selectedRowData"
          :gridOptions="selectedGridOptions">
        </ag-grid-vue>
        <ag-grid-vue class="ag-theme-balham column"
          :columnDefs="unSelectedColumnDefs"
          :rowData="unSelectedRowData"
          :gridOptions="unSelectedGridOptions">
        </ag-grid-vue>
      </div>
      <button @click="deActivateEditor">Save</button>
    </div>
  </div>
</template>

<script src="./GroupEditor.js">
</script>

<style scoped src="./GroupEditor.scss" lang="scss">
</style>
