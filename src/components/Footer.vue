<template>
  <footer class="footer footer-transparent d-print-none">
      <div class="container">
        <div class="row text-center align-items-center flex-row-reverse">
          <div class="col-lg-auto ms-lg-auto">
            <ul class="list-inline list-inline-dots mb-0">
              <li class="list-inline-item"><a href="./docs/index.html" class="link-secondary">Documentation</a></li>
              <li class="list-inline-item"><a href="./license.html" class="link-secondary">License</a></li>
              <li class="list-inline-item"><a href="https://github.com/tabler/tabler" target="_blank" class="link-secondary" rel="noopener">Source code</a></li>
            </ul>
          </div>
          <div class="col-12 col-lg-auto mt-3 mt-lg-0">
            <ul class="list-inline list-inline-dots mb-0">
              <li class="list-inline-item">
                Copyright © 2021
                <a href="." class="link-secondary">Rasyidf</a>.
                All rights reserved.
              </li>
              <li class="list-inline-item">
                <a href="./changelog.html" class="link-secondary" rel="noopener">v1.0.0-beta</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
