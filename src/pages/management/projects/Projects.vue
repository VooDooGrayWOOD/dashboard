<template>
  <Page>
    <Page.Toolbar>
      <Toolbar.Top>
        <Toolbar.CreateBtn
          @click="createProject"
          text="management.newProject"
        />
        <Toolbar.Search placeholder="searchByName" />
        <Toolbar.Count text="management.totalProjects" :count="1" />
      </Toolbar.Top>
      <Toolbar.Bottom>
        <Toolbar.AvatarGroup title="participants" />
      </Toolbar.Bottom>
    </Page.Toolbar>

    <!-- <Page.Content> -->
    <!-- <TaskList :tasks="filteredTasks" /> -->
    <!-- </Page.Content> -->
    <div class="content">Welcome to Projects</div>
  </Page>
</template>

<script setup>
import { Page } from '@/layouts';
import Toolbar from '@/components/toolbar';

const createProject = () => {
  console.log('🚀 ~ createProject ~');
};
</script>

<style lang="scss" scoped>
.content {
  padding: 10px;
}
</style>
