<template>
  <div class="card">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">

      <form class="text-center">

        <div class="form-group col align-self-center">
          <label for="inputState">Tipo de Conversión</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <h3 class="card-title">De tasa Nominal a Tasa Efectiva</h3>

        <div class="form-row col align-self-center">
          <div class="form-group col">
            <label for="inputState">Dias del año</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>

          <div class="form-group col">
            <label for="inputState">Termino de tasa nominal</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">Tasa nominal</label>
            <input type="text" class="form-control" id="inputCity">
          </div>

          <div class="form-group col-md-4">
            <label for="inputState">Periodo compuesto</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>

        <div class="form-group col-md-4">
          <label for="inputState">Tasa efectiva requerida</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>

        <button type="button" class="btn btn-primary btn-lg">SHOW</button>
        <button type="button" class="btn btn-secondary btn-lg">NEW</button>
        <router-link to="/home">
          <button type="button" class="btn btn-secondary btn-lg">EXIT</button>
        </router-link>
        <div class="form-group col-md-6">
          <label for="inputCity">Resultados</label>
          <input type="text" class="form-control" id="inputCity">
        </div>

      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: "Conversion_rate"
}
</script>

<style scoped>

</style>