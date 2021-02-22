<template>
  <aside class="navbar navbar-vertical navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="navbar-brand navbar-brand-autodark">
        <a href=".">
          <img
            width="110"
            height="32"
            alt=" SIPTA"
            class="navbar-brand-image"
          />
        </a>
      </h1>
      <div class="navbar-nav flex-row d-lg-none">
        <div class="nav-item dropdown d-none d-md-flex me-3">
          <a
            href="#"
            class="nav-link px-0"
            data-bs-toggle="dropdown"
            tabindex="-1"
            aria-label="Show notifications"
          >
            <i class="ti ti-bell" height="24" width="24"></i>
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
            <span
              class="avatar avatar-sm" 
            >FR</span>
            <span
              class="avatar avatar-sm"
              style="background-image: url(./static/avatars/000m.jpg)"
            ></span>
            <div class="d-none d-xl-block ps-2">
              <div>Rasyid</div>
              <div class="mt-1 small text-muted">UI Designer</div>
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <a href="#" class="dropdown-item">Set status</a>
            <a href="#" class="dropdown-item">Profile &amp; account</a>
            <a href="#" class="dropdown-item">Feedback</a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">Settings</a>
            <a href="#" class="dropdown-item">Logout</a>
          </div>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbar-menu">
        <ul class="navbar-nav pt-lg-3">
          <li class="nav-item">
            <router-link to="home" active-class="active" class="nav-link">
              <span class="nav-link-icon d-md-none d-lg-inline-block">
                <i class="ti ti-home"></i>
              </span>
              <span class="nav-link-title"> Home </span>
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle show" 
              href="#navbar-base" 
              role="button"
              aria-expanded="true"
            >
              <span class="nav-link-icon d-md-none d-lg-inline-block">
                <i class="ti ti-database"></i>
              </span>
              <span class="nav-link-title"> Data </span>
            </a>
            <div class="dropdown-menu show">
              <div class="dropdown-menu-columns">
                <div class="dropdown-menu-column">
                  <router-link to="features" class="dropdown-item">
                    Features
                  </router-link>
                  <router-link to="classes" class="dropdown-item">
                    Classes
                  </router-link>
                </div>
                <div class="dropdown-menu-column">
                  <router-link class="dropdown-item" to="data"> Data </router-link>
                  <router-link class="dropdown-item" to="stats"> Statistics </router-link>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle  show"
              href="#navbar-base" 
              role="button"
              aria-expanded="true"
            >
              <span class="nav-link-icon d-md-none d-lg-inline-block">
                <i class="ti ti ti-box-model"></i>
              </span>
              <span class="nav-link-title"> Models </span>
            </a>
            <div class="dropdown-menu show">
              <div class="dropdown-menu-columns">
                <div class="dropdown-menu-column">
                  <router-link class="dropdown-item" to="train"> Training </router-link>
                  <router-link class="dropdown-item" to="logs"> Logging   </router-link>
                  <router-link class="dropdown-item" to="report"> Report  </router-link>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item">
             <router-link class="nav-link" to="settings">
              <span class="nav-link-icon d-md-none d-lg-inline-block">
                <i class="ti ti-settings"></i>
              </span>
              <span class="nav-link-title"> Settings </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="docs">
              <span class="nav-link-icon d-md-none d-lg-inline-block">
                <i class="ti ti-file-text"></i>
              </span>
              <span class="nav-link-title"> Documentation </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      DataExpanded: false,
      ModelsExpanded: false,
    }
  },
  props: {
    msg: String,
  },
  created(){
    let a = this.$router.path;
    console.log(a);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
