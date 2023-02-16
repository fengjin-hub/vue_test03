<template>
  <a-table
    :columns="columns"
    :data-source="data"
    class="components-table-demo-nested"
    :expandedRowKeys="expandedRowKeys"

  >
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a-button @click="zhankai">新增</a-button>
      </template>
    </template>
    <template #expandedRowRender>
      <InnerTable  />
    </template>
  </a-table>
</template>
<script setup>
import { ref } from "vue";
import { data, columns } from "../config.js";
import InnerTable from "./InnerTable.vue";

const expandedRowKeys = ref();
const zhankai = () => {
  expandedRowKeys.value='Screem 1';
};
</script>
