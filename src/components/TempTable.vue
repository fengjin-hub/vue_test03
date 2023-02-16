<template>
  <a-table
    :columns="columns"
    :data-source="data"
    class="components-table-demo-nested"
    v-model:expandedRowKeys="expandedRowKeys"
    rowKey="name"
    @expand="expand"
  >
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a-button @click="zhankai">新增</a-button>
      </template>
    </template>
    <template #expandedRowRender>
      <InnerTable :expanded="expanded" ref="innerTable" />
    </template>
  </a-table>
</template>
<script setup>
import { ref, nextTick } from "vue";
import { data, columns } from "../config.js";
import InnerTable from "./InnerTable.vue";

const innerTable = ref(null);
const expandedRowKeys = ref([]);
const zhankai = () => {
  expandedRowKeys.value = ["Screem 1"];
  nextTick(() => {
    innerTable.value?.add();
  });
};

const expanded = ref(false);
const expand = async (expand) => {
  setTimeout(() => {
    expanded.value = expand;
  });
};
</script>
