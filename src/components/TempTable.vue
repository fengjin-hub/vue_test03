<template>
  <a-table
    :columns="columns"
    :data-source="data"
    class="components-table-demo-nested"
    v-model:expandedRowKeys="expandedRowKeys"
    rowKey="name"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'operation'">
        <a-button @click="onExpand(record)">新增</a-button>
      </template>
    </template>
    <template #expandedRowRender="{ record }">
      <InnerTable :ref="record.name" />
    </template>
  </a-table>
</template>
<script setup>
import { ref, nextTick, getCurrentInstance } from "vue";
import { data, columns } from "../config.js";
import InnerTable from "./InnerTable.vue";

const expandedRowKeys = ref([]);
const instance = getCurrentInstance();
const onExpand = async ({ name }) => {
  expandedRowKeys.value.push(name);
  await nextTick;
  instance.refs[name]?.onAdd();
};
</script>
