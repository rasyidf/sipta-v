<template>
  <a href="#" class="list-group-item ">
    <div class="container">
      <div class="row">
        <div class="col-auto">
          <span class="avatar">{{ disp }}</span>
        </div>
        <div class="col">
          <div class="text-truncate">
            {{ msg }}
          </div>
          <div class="text-muted">{{ date }}</div>
        </div>
        <div class="col-auto align-self-center">
          <div class="badge bg-primary" :class="[background]"></div>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  name: "DataLogItem",
  props: {
    disp: String,
    msg: String,
    date: String,
    background: String,
  },
};
</script>