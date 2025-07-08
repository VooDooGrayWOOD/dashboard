<template>
  <Page>
    <Page.Toolbar>
      <Toolbar.Top>
        <Toolbar.CreateBtn @click="createTask" text="management.newTasks" />
        <Toolbar.Search placeholder="searchByName" />
        <Toolbar.Count text="management.totalTasks" :count="1" />
      </Toolbar.Top>
      <Toolbar.Bottom>
        <Toolbar.AvatarGroup title="participants" />
      </Toolbar.Bottom>
    </Page.Toolbar>

    <!-- <Page.Content> -->
    <!-- <TaskList :tasks="filteredTasks" /> -->
    <!-- </Page.Content> -->
    <div class="content">Welcome to Tasks</div>
  </Page>
</template>

<script setup>
import { Page } from '@/layouts';
import Toolbar from '@/components/toolbar';

const createTask = () => {
  console.log('🚀 ~ createTask ~');
};
</script>

<style lang="scss" scoped>
.content {
  padding: 10px;
}
</style>
