<template>
  <a-table :columns="columns" :data-source="dataSource" bordered>
    <template #bodyCell="{ column, text, record }">
      <template v-if="['name', 'age', 'address'].includes(column.dataIndex)">
        <div>
          <a-input
            v-if="editableData[record.key]"
            v-model:value="editableData[record.key][column.dataIndex]"
            style="margin: -5px 0"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template v-else-if="column.dataIndex === 'operation'">
        <div class="editable-row-operations">
          <span v-if="editableData[record.key]">
            <a-typography-link @click="save(record.key)"
              >Save</a-typography-link
            >
            <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
              <a>Cancel</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a @click="edit(record.key)">Edit</a>
            <a @click="addRow()">Add</a>
          </span>
        </div>
      </template>
    </template>
  </a-table>
</template>
<script setup>
import { cloneDeep } from "lodash-es";
import { reactive, ref, defineExpose, onMounted } from "vue";
import { columns, data } from "../config";

const dataSource = ref(data);
const editableData = reactive({});

const addRow = () => {
  const row = {
    name: "11111111111111",
    age: "1111111111",
    address: "1111111111111111",
  };
  dataSource.value.push(row);
};

const edit = (key) => {
  editableData[key] = cloneDeep(
    dataSource.value.filter((item) => key === item.key)[0]
  );
};
const save = (key) => {
  Object.assign(
    dataSource.value.filter((item) => key === item.key)[0],
    editableData[key]
  );
  delete editableData[key];
};
const cancel = (key) => {
  delete editableData[key];
};

defineExpose({
  dataSource,
  addRow,
});

// const getList = () => {
//   // setTimeout(() => {
//   //   dataSource.value = data;
//   // }, 500);
//   dataSource.value = data;
// };
onMounted(() => {
  // getList();
});
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
