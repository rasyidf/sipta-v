<template>
  <ul class="pagination m-0 ms-auto">
    <li
      class="page-item"
      :class="{ disabled: !prevEnable }"
      :aria-disabled="!prevEnable"
    >
      <a class="page-link" @click="prevPages" tabindex="-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          viewbox="0 0 20 20"
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
      <a class="page-link" @click="goto(i)">{{ i }}</a>
    </li>
    <li
      class="page-item"
      :class="{ disabled: !nextEnable }"
      :aria-disabled="!nextEnable"
    >
      <a class="page-link align-content-center" @click="nextPages" tabindex="-1">
        next
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewbox="0 0 20 20">
          
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <polyline points="9 6 15 12 9 18"></polyline>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
import paginate from "paginate-array";

function pager(data, start, max, next) {
  if (data.length >= 5) {
    const pa = start - 2 + (next ? 2 : 0);
    const pn = Number.parseInt(pa / 5);
    if (start == data.length) {
      return paginate(data, Number.parseInt(start / 5), max);
    } else if (pn > 0) {
      return paginate(data, pn + 1, max);
    } else {
      return paginate(data, 1, max);
    }
  } else {
    return { data: data };
  }
}
export default {
  data() {
    return {
      Allpage: [1],
      pages: [],
      pagenum: 1,
      max: 20,
    };
  },
  computed: {
    MaxItems: {
      get: function () {
        return this.max;
      },
      set: function (newValue) {
        this.max = newValue;
      },
    },
    prevEnable: function () {
      return this.page > 1;
    },
    nextEnable: function () {
      return this.page < this.max;
    },
  },
  props: ["page"],
  emits: ["next", "prev", "goto"],
  mounted: function () {
    const N = this.max;
    this.Allpage = [...Array(N).keys()].map((x) => x + 1);
      this.pages = pager(this.Allpage, this.page, 5, true);
  },
  methods: {
    nextPages: function () {
      this.pages = pager(this.Allpage, this.page, 5, true);
      this.$emit("next");
    },
    prevPages: function () {
      this.pages = pager(this.Allpage, this.page, 5, false);
      this.$emit("prev");
    },
    goto: function (i) {
      this.$emit("goto", i);
    },
  },
};
</script>

<style scoped>
.icon {
  align-self: center;
  width: 20  !important; 
  height: 20 !important; 
  stroke-width:2!important; 
  stroke:currentColor !important; 
  fill: none !important; 
  stroke-linecap: round !important; 
  stroke-linejoin: round !important; 
}
</style>