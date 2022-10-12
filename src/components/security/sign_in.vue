<template>
  <div class="container">
    <div style="width: 100%; margin: 20px 0; position: fixed">
      <div style="justify-content: center; align-items: center; display: flex">
        <button class="principal p-button-rounded button_navigation">Sign In</button>
        <router-link to="/sign-up" style="text-decoration: none; margin: 0 15px;">
          <button class="button_navigation p-button-rounded">Sign Up</button>
        </router-link>
      </div>
    </div>
    <div class="content">
      <div class="titles">
        <h1>Sing In To Business Operation</h1>
        <h2>if you don't have an account</h2>
        <h2>you can Register here!</h2>
        <img src="https://img.freepik.com/vector-gratis/estrategia-empresarial-empresarial-analisis-mercado-seleccion-nichos-conquista-mercado-estudiar-segmentacion-mercado-planificar-desarrollo-empresa_335657-2353.jpg?w=826&t=st=1665614391~exp=1665614991~hmac=135a41619d84ef3ab3f28a28d7d0b4186cf365e438b8bb1b42a8a073ced557a9">
      </div>
      <div class="form">
        <div class="inform">
          <span class="p-float-label" style="width: 100%">
            <InputText id="username" type="text" v-model="value2" style="width: 100%;" />
            <label for="username">Email</label>
          </span>
            <span class="p-float-label" style="width: 100%;">
              <InputText id="username" type="text" v-model="value2" style="width: 100%;"/>
              <label for="username">Password</label>
          </span>
          <router-link to="/home" style="text-decoration: none; margin: 0 15px; width: 100%">
            <Button label="Sign In" style="width: 100%; border-radius: 8px; background: #4461f2" />
          </router-link>
          <p>Or Continue with</p>
          <div class="social_red">
            <Button icon="pi pi-facebook" class="p-button-rounded facebook" />
            <Button icon="pi pi-google" class="p-button-rounded google" />
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "sign_in"
}
</script>

<style scoped>
  .button_navigation{
    padding: 8px 20px;
    margin: 0 15px;
    background: #fff;
    border: 1.5px solid #4461f2;
    color: #4461f2;
    transition: 0.3s;
    border-radius: 15px;
    cursor: pointer;
  }
  .button_navigation:hover{
    background: #4461f2;
    color: #fff;
  }
  .principal{
    background: #4461f2;
    color: #fff;
  }
  .content{
    display: grid;
    width: 90% ;
    height: 100vh;
    margin: auto;
    grid-template-columns: repeat(2, 1fr);
  }
  .titles{
    margin: auto;
  }
  .titles img{
    width: 80%;
    margin: auto;
  }
  .form{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .form .inform{
    width: 70%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .inform span, .inform Button{
    margin: 15px 0;
  }
  .inform span input{
    border: none;
    border-radius: 8px;
    color: #4F555A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    outline: none
  }
  .inform span input:focus{
    outline: none
  }
  .inform span label{
    color: #4F555A;
  }
  .social_red .facebook{
    background: #1778f2;
    margin: 15px;
  }
  .social_red .google{
    margin: 15px;
    background: #4F555A;
  }
  .social_red .facebook:hover{
    background: #fff;
    color: #1778f2;
    border: 1px solid #1778f2;
  }
  .social_red .google:hover{
    background: #fff;
    color: #4F555A;
    border: 1px solid #4F555A;
  }
</style>