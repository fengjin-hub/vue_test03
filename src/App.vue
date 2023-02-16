<template>
    <a-button @click="handleClick">显示表格</a-button>
    <temp-table ref="temptable" v-if="showTable"></temp-table>
</template>


<script setup>
import { ref } from 'vue';
import TempTable from './components/TempTable.vue';

const showTable = ref(false);
const temptable = ref();

function handleClick() {
    showTable.value=!showTable.value;
    temptable.value.addRow();
}


</script>


<style scoped>
ul>li:first-child {
    color: red;
}
li::before{
    content: 'dhsjds';
}
</style>