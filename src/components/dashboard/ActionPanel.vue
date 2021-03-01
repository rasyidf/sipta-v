<template>
  <div class="row row-cards">
    <div class="col-12" v-for="i in 2" :key="i">
      <div class="card card-sm">
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-auto">
              <span class="bg-green-lt avatar"
                ><svg
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
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="18" y1="11" x2="12" y2="5"></line>
                  <line x1="6" y1="11" x2="12" y2="5"></line>
                </svg>
              </span>
            </div>
            <div class="col">
              <div class="font-weight-medium">
                0.0105
                <span class="float-right font-weight-medium text-green"
                  >-6.8%</span
                >
              </div>
              <div class="text-muted">Loss</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Configuration</h3>
          <div class="card-actions">
            <a href="#">
              Edit configuration
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon ms-1"
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
                <path
                  d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"
                ></path>
                <path
                  d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"
                ></path>
                <line x1="16" y1="5" x2="19" y2="8"></line>
              </svg>
            </a>
          </div>
        </div>
        <div class="card-body">
          <dl class="row">
            <dt class="col-5">Date:</dt>
            <dd class="col-7">2021-03-01 16:42:29 WIB</dd>
            <dt class="col-5">Account:</dt>
            <dd class="col-7">rasyidf</dd>
            <dt class="col-5">Location:</dt>
            <dd class="col-7">
              <span class="flag flag-country-pl"></span> Yogyakarta
            </dd>
            <dt class="col-5">IP Address:</dt>
            <dd class="col-7">172.23.32.1</dd>
            <dt class="col-5">Operating system:</dt>
            <dd class="col-7">Windows 10 21H1 64-bit</dd>
            <dt class="col-5">Sync:</dt>
            <dd class="col-7">True</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>