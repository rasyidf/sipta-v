<template>
  <div class="card" style="height: calc(25rem + 10px)">
    <div class="card-body card-body-scrollable card-body-scrollable-shadow">
      <div class="divide-y-4">
        <div class="list-group list-group-flush overflow-auto">
          <DataLogItem v-for="i in datalogs" :key="i" :disp="i.disp" :msg="i.msg" :date="i.date" :background="i.background"/>
 
         </div>
      </div>
    </div>
  </div>
</template>
<script>
import DataLogItem from "@/components/dashboard/DataLogItem.vue";
export default {
    data() {
    return {
      datalogs: [
          {
             id: 1, disp:'!', msg: 'This is Data Log', date:'today', background:'bg-success'  
          }
      ],
    };
  },
    components: { DataLogItem }
}
</script>