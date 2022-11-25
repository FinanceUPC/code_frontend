<template>
  <div class="card">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <form class="text-center">

        <div class="form-group col align-self-center">
          <label>Tipo de Conversión</label>
          <select @change="this.changeConversion" id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>Conversion a valor futuro</option>
            <option>Conversion a valor presente</option>
            <button type="button" class="btn btn-primary btn-lg" @click="this.Result">SHOW</button>
          </select>
        </div>
        <div v-if="typeConversion == 'Conversion a valor futuro'">
          <h3 class="card-title">Conversion de valor presente a valor futuro</h3>
          <div class="form-row align-self-center">
            <div class="form-group col-md-6">
              <label>Valor Futuro</label>
              <input v-model="CPF" type="text" class="form-control">
            </div>
            <div class="form-group col-md-6">
              <label >Plazo de tasa Efectiva</label>
              <select id="PPF" class="form-control">
                <option selected>Choose...</option>
                <option>Diario</option>
                <option>Quincenal</option>
                <option>Mensual</option>
                <option>Bimestral</option>
                <option>Trimestral</option>
                <option>Cuatrimestral</option>
                <option>Semestral</option>
                <option selected>Anual</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Tasa Efectiva</label>
              <input v-model="TPF" type="text" class="form-control">
            </div>
            <div class="form-group col-md-6">
              <label>Fecha Inicial</label>
              <input v-model="TIPF" type="text" class="form-control">
            </div>
          </div>
        </div>
        <div v-if="typeConversion == 'Conversion a valor presente'">
          <h3 class="card-title">Conversion de valor futuro a valor presente</h3>
          <div class="form-row align-self-center">
            <div class="form-group col-md-6">
              <label>Valor Futuro</label>
              <input v-model="CFP" type="text" class="form-control">
            </div>
            <div class="form-group col-md-6">
              <label >Plazo de tasa Efectiva</label>
              <select id="PFP" class="form-control">
                <option selected>Choose...</option>
                <option>Diario</option>
                <option>Quincenal</option>
                <option>Mensual</option>
                <option>Bimestral</option>
                <option>Trimestral</option>
                <option>Cuatrimestral</option>
                <option>Semestral</option>
                <option selected>Anual</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Tasa Efectiva</label>
              <input v-model="TFP" type="text" class="form-control">
            </div>
            <div class="form-group col-md-6">
              <label>Fecha Inicial</label>
              <input v-model="TIFP" type="text" class="form-control">
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary btn-lg" @click="this.Result">SHOW</button>
        <button type="button" class="btn btn-secondary btn-lg">NEW</button>
        <router-link to="/home">
          <button type="button" class="btn btn-secondary btn-lg">EXIT</button>
        </router-link>
        <div class="form-group col-md-6">
          <label for="inputCity">Resultados</label>
          <h1>{{this.R.toFixed(3)}} %</h1>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "conversion_time",
  data(){
    return{
      typeConversion: " ",
      R: 0,
      CPF: 0,
      PPF: 0,
      TPF: 0,
      TIPF: 0,
      CFP: 0,
      PFP: 0,
      TFP: 0,
      TIFP: 0,
    }
  },
  created() {

  },
  methods:{
    changeConversion(){
      this.typeConversion = document.getElementById('inputState').value;
    },
    assignValues(time){
      let value;
      if(time == "Diario")
        value = 1;
      if(time == "Quincenal")
        value = 15;
      if(time == "Mensual")
        value = 30;
      if(time == "Bimestral")
        value = 60;
      if(time  == "Trimestral")
        value = 90;
      if(time == "Cuatrimestral")
        value = 120;
      if(time == "Semestral")
        value = 180;
      if(time == "Anual")
        value = 360
      return value;
    },
    valuePresent(){
      this.PFP = this.assignValues(document.getElementById('PFP').value);
      this.TFP = this.TFP/100;
      this.R = this.CFP/(Math.pow(1+this.TFP, (this.TIFP)/this.PFP))
    },
    valueFuture(){
      this.PPF = this.assignValues(document.getElementById('PPF').value);
      this.TPF = this.TPF/100;
      this.R = this.CPF*(Math.pow(1+this.TPF, (this.TIPF)/this.PPF))
    },
    Result(){
      switch (this.typeConversion) {
        case 'Conversion a valor futuro':
          this.valueFuture();
          break;
        case 'Conversion a valor presente':
          this.valuePresent();
          break;
      }
    }
  }
}
</script>

<style scoped>

</style>