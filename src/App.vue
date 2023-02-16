<template>
    <temp-table ref="temptable" ></temp-table>
</template>


<script setup>
import TempTable from './components/TempTable.vue';


</script>


<style scoped>
ul>li:first-child {
    color: red;
}
li::before{
    content: 'dhsjds';
}
</style>