<template>
  <div class="container-xl">
    <PageHeader title="Data" subtitle="Models" />
    <Table />
  </div>
</template>
<script>
import PageHeader from "@/components/PageHeader.vue";
import Table from "@/components/Table.vue";
export default {
  components: { PageHeader, Table },
};
</script>