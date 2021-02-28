<template>
  <div class="card" style="height: calc(24rem + 10px)">
    <div class="card-body card-body-scrollable card-body-scrollable-shadow">
      <div class="divide-y-4">
        <DataLogItem v-for="i in 10" :key="i"/>
      </div>
    </div>
  </div>
</template>
<script>
import DataLogItem from "@/components/dashboard/DataLogItem.vue";
export default {
    components: { DataLogItem }
}
</script>