<template>
  <a-table :columns="innerColumns" :data-source="data" :pagination="false">
    <template #bodyCell="{ column: { dataIndex }, text, record: { key } }">
      <template v-if="['date', 'name', 'upgradeNum'].includes(dataIndex)">
        <a-input
          v-if="editCheck(key)"
          v-model:value="editCheck(key)[dataIndex]"
          style="margin: -5px 0"
        />
        <template v-else>
          {{ text }}
        </template>
      </template>
      <template v-else-if="dataIndex === 'operation'">
        <span class="table-operation">
          <a v-if="editCheck(key)" @click="onSave(key)">保存</a>
          &nbsp;
          <a v-else @click="onEdit(key)">编辑</a>
          &nbsp;
          <a @click="onAdd">新增</a>
        </span>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { ref, reactive, computed, defineExpose, onMounted } from "vue";
import { innerColumns, innerData } from "../config.js";

const data = ref([]);
const isAdd = ref(false);
const isFirstly = ref(true);
const editableData = reactive({});
onMounted(async () => {
  data.value = await fetchData();
  isAdd.value && onAdd();
});
const editCheck = computed(() => (key) => editableData[key]);
const fetchData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      isFirstly.value = false;
      resolve([...innerData]);
    });
  });

const onAdd = () => {
  isAdd.value = true;
  if (!isFirstly.value) {
    const key = Date.now().toString();
    data.value.push({
      key,
    });
    onEdit(key);
  }
};
const onEdit = (key) => {
  editableData[key] = {
    ...data.value.filter((item) => key === item.key).at(0),
  };
};
const onSave = (key) => {
  Object.assign(
    data.value.filter((item) => key === item.key)[0],
    editableData[key]
  );
  delete editableData[key];
};

defineExpose({
  onAdd,
});
</script>
