<template>
  <a-table
    :columns="innerColumns"
    :data-source="innerData"
    :pagination="false"
  >
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
// import { ref,defineProps } from "vue";
import { innerColumns, innerData } from "../config.js";

</script>

<style scoped></style>
