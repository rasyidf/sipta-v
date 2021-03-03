<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">{{ title }}</h3>
    </div>
    <div class="card-body border-bottom py-3">
      <div class="d-flex">
        <div class="text-muted">
          Show
          <div class="mx-2 d-inline-block">
            <input
              :value="maxItems"
              type="text"
              class="form-control form-control-sm"
              size="3"
              aria-label="Invoices count"
            />
          </div>
          entries
        </div>
        <div class="ms-auto text-muted">
          Search:
          <div class="ms-2 d-inline-block">
            <input
              type="text"
              class="form-control form-control-sm"
              aria-label="Search invoice"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table card-table table-vcenter text-nowrap datatable">
        <thead class="thead-dark">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in currPage.data" :key="user.username">
            <td>{{ user.id }}</td>
            <td>{{ user.title }}</td>
            <td>{{ user.completed ? "✔" : "🔔" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer d-flex align-items-center">
      <p class="m-0 text-muted">
        Showing
        <span>{{ (currPage.currentPage - 1) * currPage.perPage + 1 }}</span> to
        <span>{{ currPage.currentPage * currPage.perPage }}</span> of
        <span>{{ currPage.total }}</span> entries
      </p>
      <Pagination
        :page="currPage.currentPage"
        :max="currPage.totalPages"
        @next="nextPage"
        @goto="toPage"
        @prev="prevPage"
      />
    </div>
  </div>
</template>

<script>
import paginate from "paginate-array";
import Pagination from "@/components/Pagination.vue";
import axios from "axios";
export default {
  name: "Table",
  data() {
    return {
      currPage: [],
      data: [],
      maxItems: 10,
      page: 1,
    };
  },
  props: {
    title: String,
  },
  components: { Pagination },
  mounted: function () {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        this.data = response.data;
        this.currPage = paginate(this.data, this.newPage, this.size);
        console.table(this.currPage);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    prevPage: function () {
      if (this.page > 1) {
        const newPage = this.page - 1;
        const newCurrPage = paginate(this.data, newPage, this.maxItems);
        this.page = newPage;
        this.currPage = newCurrPage;
      }
    },
    nextPage: function () {
      if (this.page < this.currPage.totalPages) {
        const newPage = this.page + 1;
        const newCurrPage = paginate(this.data, newPage, this.maxItems);
        this.page = newPage;
        this.currPage = newCurrPage;
      }
    },
    toPage: function (page) {
      if (page < this.currPage.totalPages && page > 0) { 
        const newCurrPage = paginate(this.data, page, this.maxItems);
        this.page = page;
        this.currPage = newCurrPage;
      }
    },
  },
};
</script>

<style>
</style>