<template>
  <div class="container-xl">
    <PageHeader title="Dashboard" subtitle="home" />
    <div class="row row-deck row-cards">
      <div class="col-md-8">
        <DataLogPanel />
      </div>
      <div class="col-md-4">
        <ActionPanel />
      </div>
      <div class="col-md-12 col-lg-12">
        <WebHookPanel />
      </div>
      <div class="col-12">
        <StoragePanel />
      </div>
      <div class="col-md-12 col-lg-4"> 
        <SensorsPanel />
      </div>
      <div class="col-md-12 col-lg-8">
        <TaskPanel />
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import DataLogPanel from "@/components/dashboard/DataLogPanel.vue";
import TaskPanel from "@/components/dashboard/TaskPanel.vue";
import StoragePanel from "@/components/dashboard/StoragePanel.vue";
import SensorsPanel from '@/components/dashboard/SensorsPanel.vue';
import WebHookPanel from '@/components/dashboard/WebHookPanel.vue';
import ActionPanel from '@/components/dashboard/ActionPanel.vue';
export default {
  name: "Home",
  components: { PageHeader, DataLogPanel, TaskPanel, StoragePanel, SensorsPanel, WebHookPanel, ActionPanel, },
};
</script>
