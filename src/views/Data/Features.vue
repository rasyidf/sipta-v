<template>
  <div class="container-xl">
    <PageHeader title="Features" subtitle="Models" /> 
    <Table />
  </div>
</template>
<script> 
import PageHeader from "@/components/PageHeader.vue";
import Table from "@/components/Table.vue";
export default {
  components: { PageHeader, Table},
  data(){
    return {
    
    };
  },
};
</script>