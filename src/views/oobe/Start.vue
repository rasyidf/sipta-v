<template>
  <div class="flex-fill d-flex flex-column justify-content-center py-4">
    <div class="container-tight py-6">
      <div class="text-center mb-4">
        <a href="."><img src="@assets/logo.svg" height="36" alt="" /></a>
      </div>
      <div class="card card-md">
        <div class="card-body text-center py-4 p-sm-5">
          <img
            src="./static/illustrations/undraw_sign_in_e6hj.svg"
            height="128"
            class="mb-n2"
            alt=""
          />
          <h1 class="mt-5">Welcome to Tabler!</h1>
          <p class="text-muted">
            Tabler comes with tons of well-designed components and features.
            Start your adventure with Tabler and make your dashboard great
            again.
          </p>
        </div>
        <div class="hr-text hr-text-center hr-text-spaceless">your data</div>
        <div class="card-body">
          <div class="mb-3">
            <label class="form-label">Create your Tabler URL</label>
            <div class="input-group input-group-flat">
              <span class="input-group-text"> https://tabler.io/ </span>
              <input type="text" class="form-control ps-1" autocomplete="off" />
            </div>
            <div class="form-hint">
              Choose a URL that describes you or your business in a concise way.
              Make it short and easy to remember so you can share links with
              ease.
            </div>
          </div>
          <div>
            <label class="form-label">Timezone</label>
            <select class="form-select mb-0">
              <option value="AKDT">(UTC-09:00) Alaska</option>
              <option value="PDT">(UTC-08:00) Baja California</option> 
          </div>
        </div>
      </div>
      <div class="row align-items-center mt-3">
        <div class="col-4">
          <div class="progress">
            <div
              class="progress-bar"
              style="width: 25%"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span class="visually-hidden">25% Complete</span>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="btn-list justify-content-end">
            <a href="#" class="btn btn-link link-secondary"> Set up later </a>
            <a href="#" class="btn btn-primary"> Continue </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>