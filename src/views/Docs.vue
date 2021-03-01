<template>
  <div class="container-xl">
    <PageHeader title="Documentation" />
    <div class="row gx-lg-4">
      <div class="d-none d-lg-block col-lg-3">
        <ul class="nav nav-pills nav-vertical">
          <li class="nav-item">
            <router-link to="/docs/intro" exact class="nav-link">
              Introduction
            </router-link>
          </li>
          <li class="nav-item">
            <a
              href="#menu-base"
              class="nav-link collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
            >
              Getting started
              <span class="nav-link-toggle"></span>
            </a>
            <ul class="nav nav-pills collapse" id="menu-base" style="">
              <li class="nav-item">
                <router-link to="/docs/init" class="nav-link">
                  Initialization
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/docs/preparation" class="nav-link">
                  Preparation
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/docs/models" class="nav-link">
                  Model Integration
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a
              href="#menu-layout"
              class="nav-link"
              data-bs-toggle="collapse"
              aria-expanded="false"
            >
              Data
              <span class="nav-link-toggle"></span>
            </a>
            <ul class="nav nav-pills collapse" id="menu-layout">
              <li class="nav-item">
                <router-link to="/docs/features" class="nav-link">
                  Features (Inputs)
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/docs/classes" class="nav-link">
                  Classes (Outputs)
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/docs/data" class="nav-link">
                  Data
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a
              href="#menu-utils"
              class="nav-link"
              data-bs-toggle="collapse"
              aria-expanded="false"
            >
              Model
              <span class="nav-link-toggle"></span>
            </a>
            <ul class="nav nav-pills collapse" id="menu-utils">
              <li class="nav-item">
                <router-link to="/docs/training" class="nav-link">
                  Training
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/docs/logs" class="nav-link">
                  Logs
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/docs/reports" class="nav-link">
                  Reports
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/docs/interactions" class="nav-link">
                  Interactions
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/docs/charts" class="nav-link">
                  Charts
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a
              href="#menu-plugins"
              class="nav-link"
              data-bs-toggle="collapse"
              aria-expanded="false"
            >
              Webhooks
              <span class="nav-link-toggle"></span>
            </a>
            <ul class="nav nav-pills collapse" id="menu-plugins">
              <li class="nav-item">
                <router-link to="/docs/webhook-triggers" class="nav-link">
                  Triggers
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/docs/webhook-flags" class="nav-link">
                  Flags
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/docs/webhook-examples" class="nav-link">
                  Examples
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="changes" class="nav-link">
              Changelog
              <span class="badge bg-blue-lt ms-auto">1.0.0-beta</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-lg-9">
        <div class="card card-lg">
          <div class="card-body">
            <div class="markdown">
              <router-view/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "Docs",
  components: { PageHeader },
};
</script>