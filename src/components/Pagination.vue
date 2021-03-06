<template>
  <ul class="pagination m-0 ms-auto">
    <li class="page-item">
      <a class="page-link" @click="$emit('prev')" tabindex="-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <polyline points="15 6 9 12 15 18"></polyline>
        </svg>
        prev
      </a>
    </li>

    <li
      class="page-item"
      v-for="i in pages.data"
      :key="i"
      :class="{ 'page-item': true, active: i === page }"
    >
      <a class="page-link" @click="$emit('goto', i)">{{ i }}</a>
    </li>
    <li class="page-item">
      <a class="page-link" @click="nextPages">
        next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <polyline points="9 6 15 12 9 18"></polyline>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
import paginate from "paginate-array";
export default {
  data() {
    return {
      Allpages: [],
      pages: [],
      pagenum: 1,
      max: 5,
    };
  },
  computed: {
    MaxItems: {
      get: function () {
        return this.max;
      },
      set: function (newValue) {
        this.max = newValue;
        const N = this.max;
        this.Allpages = [...Array(N)].map((_, index) => index + 1);
        this.pages = paginate(this.Allpages, this.pagenum, 5);
      },
    },
  },
  props: ["page"],
  emits: ["next", "prev", "goto"],
  mounted: function () {},
  methods: {
    nextPages: function () {
      const pg = this.page;
      const pn = pg / 5;
      this.pages = paginate(this.Allpages, pn, 5);
      this.$emit("next");
    },
    prevPages: function () {
      const pg = this.page;
      const pn = pg / 5;
      this.pages = paginate(this.Allpages, pn, 5);
      this.$emit("prev");
    },
  },
};
</script>

<style>
</style>