<template>
  <div class="editor">
    <div class="editor__menu">
      <h2>menu</h2>
      <div class="editor__inner-cont">
        <ag-grid-vue
          style="width: 220px; height: 300px; margin: auto;"
          class="ag-theme-balham"
          :columnDefs="selectedColumnDefs"
          :rowData="selectedRowData"
          :gridOptions="selectedGridOptions"
        >
        </ag-grid-vue>
        <ag-grid-vue
          style="width: 220px; height: 300px; margin: auto;"
          class="ag-theme-balham"
          :columnDefs="unSelectedColumnDefs"
          :rowData="unSelectedRowData"
          :gridOptions="unSelectedGridOptions"
        >
        </ag-grid-vue>
      </div>
      <button @click="deActivateEditor">Сохранить</button>
    </div>
  </div>
</template>

<script src="./GroupEditor.js">
</script>

<style scoped src="./GroupEditor.scss" lang="scss">
</style>
