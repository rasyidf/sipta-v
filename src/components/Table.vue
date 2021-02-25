<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">{{title}}</h3>
    </div>
    <div class="card-body border-bottom py-3">
      <div class="d-flex">
        <div class="text-muted">
          Show
          <div class="mx-2 d-inline-block">
            <input
              :value="maxItem"
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
        <thead>
          <tr>
            <th class="w-1">
              <input
                class="form-check-input m-0 align-middle"
                type="checkbox"
                aria-label="Select all invoices"
              />
            </th>
            <th class="w-1">
              No.
            </th>
            <th>Invoice Subject</th>
            <th>Client</th>
            <th>VAT No.</th>
            <th>Created</th>
            <th>Status</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 8" :key="i">
            <td>
              <input
                class="form-check-input m-0 align-middle"
                type="checkbox"
                aria-label="Select invoice"
              />
            </td>
            <td><span class="text-muted">001401</span></td>
            <td>
              <a href="invoice.html" class="text-reset" tabindex="-1"
                >Design Works</a
              >
            </td>
            <td>
              <span class="flag flag-country-us"></span>
              Carlson Limited
            </td>
            <td>87956621</td>
            <td>15 Dec 2017</td>
            <td><span class="badge bg-success me-1"></span> Paid</td>
            <td>$887</td>
            <td class="text-end">
              <span class="dropdown">
                <button
                  class="btn dropdown-toggle align-text-top"
                  data-bs-boundary="viewport"
                  data-bs-toggle="dropdown"
                >
                  Actions
                </button>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" href="#"> Action </a>
                  <a class="dropdown-item" href="#"> Another action </a>
                </div>
              </span>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
    <div class="card-footer d-flex align-items-center">
      <p class="m-0 text-muted">
        Showing <span>{{pageStart}}</span> to <span>{{pageEnd}}</span> of <span>{{MaxItem}}</span> entries
      </p>
      <Pagination/>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
export default {
  name: 'Table',
  props: {
    title: String,
    maxItems: Number, 

  }, components: { Pagination }

};
</script>

<style>
</style>