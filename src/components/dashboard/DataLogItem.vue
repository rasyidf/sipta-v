<template>
  <div class="card" style="height: calc(24rem + 10px)">
    <div class="card-body card-body-scrollable card-body-scrollable-shadow">
      <div class="divide-y-4">
        <div v-for="i in 10" :key="i" class="history-list">
          <div class="row">
            <div class="col-auto">
              <span class="avatar">JL</span>
            </div>
            <div class="col">
              <div class="text-truncate">
                <strong>Jeffie Lewzey</strong> commented on your
                <strong>"I'm not a witch."</strong> post.
              </div>
              <div class="text-muted">yesterday</div>
            </div>
            <div class="col-auto align-self-center">
              <div class="badge bg-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>