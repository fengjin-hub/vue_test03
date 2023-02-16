<template>
  <a-table :columns="innerColumns" :data-source="data" :pagination="false">
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'state'">
        <span>
          <a-badge status="success" />
          Finished
        </span>
      </template>
      <template v-else-if="column.key === 'operation'">
        <span class="table-operation">
          <a>Pause</a>
          <a>Stop</a>
          <a-dropdown>
            <template #overlay>
              <a-menu>
                <a-menu-item>Action 1</a-menu-item>
                <a-menu-item>Action 2</a-menu-item>
              </a-menu>
            </template>
            <a>
              More
              <down-outlined />
            </a>
          </a-dropdown>
        </span>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { DownOutlined } from "@ant-design/icons-vue";
import { ref, defineExpose, defineProps, watch } from "vue";
import { innerColumns, innerData } from "../config.js";

const data = ref([]);

const props = defineProps({
  expanded: Boolean,
});
watch(
  () => props.expanded,
  (val) => {
    if (val) {
      add();
    }
  }
);
const isFirst = ref(true);
const fetchData = () => {
  console.log(1);
  return new Promise((resolve) => {
    setTimeout(() => {
      isFirst.value = false;
      resolve(innerData);
    });
  });
};

const add = async () => {
  if (isFirst.value) {
    data.value = await fetchData();
  }
  data.value.push({});
};

defineExpose({
  add,
});
</script>

<style scoped></style>
