<template>
  <div class="card text-center">
    <div class="card-header">
      <h1>HOME</h1>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-sm-6">
          <router-link to="/conversionRate" style="text-decoration: none; color: #4F555A">
            <div class="card" style="height: 100%">
              <div class="card-body">
                <div class="col-md-4">
                  <img src="http://bitly.ws/vwpX" class="card-img mw-100" alt="lupa">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Conversión entre tipos de tasa de interés</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-sm-6">
          <router-link to="" style="text-decoration: none; color: #4F555A">
          <div class="card">
            <div class="card-body">
              <div class="col-md-4">
                <img src="http://bitly.ws/vwpL" class="card-img" alt="aleman">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Metodo aleman</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          </router-link>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <router-link to="/conversionTime" style="text-decoration: none; color: #4F555A">
          <div class="card">
            <div class="card-body">
              <div class="col-md-4">
                <img src="http://bitly.ws/vwpN" class="card-img" alt="dinero">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Presente y valor futuro</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          </router-link>
        </div>
    </div>
    <div class="card-footer text-muted">
      2 days ago
    </div>
  </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "home",

}
</script>

<style scoped>

</style>