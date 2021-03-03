<template>
  <header
    class="navbar navbar-expand-md navbar-light d-none d-lg-flex d-print-none"
  >
    <div class="container-xl">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-nav flex-row order-md-last">
        <div class="nav-item dropdown d-none d-md-flex me-3">
          <a
            href="#"
            class="nav-link px-0"
            data-bs-toggle="dropdown"
            tabindex="-1"
            aria-label="Show notifications"
          >
            <i class="ti ti-bell"></i>
            <span class="badge bg-red"></span>
          </a>
          <div class="dropdown-menu dropdown-menu-end dropdown-menu-card">
            <div class="card">
              <div class="card-body">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus ad amet consectetur exercitationem fugiat in ipsa
                ipsum, natus odio quidem quod repudiandae sapiente. Amet debitis
                et magni maxime necessitatibus ullam.
              </div>
            </div>
          </div>
        </div>
        <div class="nav-item dropdown">
          <a
            href="#"
            class="nav-link d-flex lh-1 text-reset p-0"
            data-bs-toggle="dropdown"
            aria-label="Open user menu"
          >
            <span class="avatar avatar-sm">FR</span>
            <div class="d-none d-xl-block ps-2">
              <div>Fahmi Rasyid</div>
              <div class="mt-1 small text-muted">
                Universitas Muhammadiyah Yogyakarta
              </div>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <router-link to="/docs" class="dropdown-item"
              >Documentation</router-link
            >
            <router-link to="/settings/profile" class="dropdown-item"
              >Profile &amp; account</router-link
            >
            <a
              href="https://github.com/rasyidf/SIPTA/issues"
              target="_blank"
              class="dropdown-item"
              >Feedback</a
            >
            <div class="dropdown-divider"></div>
            <router-link to="/settings" class="dropdown-item"
              >Settings</router-link
            >
            <router-link to="/logout" class="dropdown-item">Logout</router-link>
          </div>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbar-menu">
        <div>
          <form action="." method="get">
            <div class="input-icon">
              <span class="input-icon-addon">
                <i class="ti ti-search" width="24"></i>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Search…"
                aria-label="Search in website"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
