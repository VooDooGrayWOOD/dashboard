<template>
  <Page>
    <Page.Toolbar>
      <Toolbar.CreateBtn @click="createTask" text="management.create" />
      <Toolbar.Search />
    </Page.Toolbar>

    <!-- <Page.Content> -->
    <!-- Основной контент страницы -->
    <!-- <TaskList :tasks="filteredTasks" /> -->
    <!-- </Page.Content> -->
  </Page>
</template>

<script setup>
import { Page } from '@/layouts';
import Toolbar from '@/components/toolbar';
// import TaskList from '@/components/TaskList.vue';
// import TaskFilters from '@/components/TaskFilters.vue';

const createTask = () => {
  console.log('🚀 ~ createTask ~');
};
</script>

<style lang="scss" scoped></style>
