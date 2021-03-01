<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Spreads</h3>
    </div>
    <table class="table card-table table-vcenter">
      <thead>
        <tr>
          <th>Class Name</th>
          <th colspan="2">Count</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in classes" :key="i">
          <td>{{ i.name }}</td>
          <td>{{ i.count }}</td>
          <td class="w-30">
            <div class="progress progress-xs">
              <div
                class="progress-bar bg-primary"
                :style="{ width: i.progress + '%' }"
              ></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      classes: [
        { name: "Cat", count: 100, progress: 100 },
        { name: "Horse", count: 42, progress: 42 },
        { name: "Hedgehog", count: 64, progress: 64 },
        { name: "Bird", count: 29, progress: 29 },
      ],
    };
  },
  components: {},
};
</script>