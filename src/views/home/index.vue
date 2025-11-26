<template>
  <div class="homePage">
    <h1>homePage</h1>
    <el-button @click="btnClick">Default</el-button>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'

const btnClick = () => {
  ElMessage({
    message: `This is a message`,
    type: 'success',
    placement: 'top',
    plain: true,
  })
}

</script>

<style scoped></style>
