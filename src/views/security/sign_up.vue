<template>
  <div class="signUp">
    <div style="width: 100%; margin: 20px 0; position: fixed">
      <div style="justify-content: center; align-items: center; display: flex">
        <router-link to="/sign-in" style="text-decoration: none; margin: 0 15px;">
          <button class="p-button-rounded button_navigation">Sign In</button>
        </router-link>
        <button class="principal button_navigation p-button-rounded">Sign Up</button>
      </div>
    </div>
    <div class="content">
      <div class="titles">
        <h1>Register To Business operation</h1>
        <h2>If you already have an account</h2>
        <h2>You can sign in here!!</h2>
        <img src="https://img.freepik.com/vector-gratis/estrategia-empresarial-empresarial-analisis-mercado-seleccion-nichos-conquista-mercado-estudiar-segmentacion-mercado-planificar-desarrollo-empresa_335657-2353.jpg?w=826&t=st=1665614391~exp=1665614991~hmac=135a41619d84ef3ab3f28a28d7d0b4186cf365e438b8bb1b42a8a073ced557a9">
      </div>
      <div class="form">
        <div class="inform">
          <span class="p-float-label" style="width: 100%">
            <InputText id="name" type="text" v-model="form.name" style="width: 100%;" />
            <label for="username">Name</label>
          </span>
          <span class="p-float-label" style="width: 100%;">
              <InputText id="lastName" type="text" v-model="form.lastName" style="width: 100%;"/>
              <label for="username">LastName</label>
          </span>
          <span class="p-float-label" style="width: 100%">
            <InputText id="Age" type="number" v-model="form.age" style="width: 100%;" />
            <label for="username">Age</label>
          </span>
          <span class="p-float-label" style="width: 100%;">
              <InputText id="email" type="email" v-model="form.email" style="width: 100%;"/>
              <label for="username">Email</label>
          </span>
          <span class="p-float-label" style="width: 100%">
            <InputText id="password" type="password" v-model="form.password" style="width: 100%;" />
            <label for="username">Password</label>
          </span>
          <span class="p-float-label" style="width: 100%;">
              <InputText id="username" type="password" v-model="confirmPassword" style="width: 100%;"/>
              <label for="username">Confirm Password</label>
          </span>
          <Message v-if="error_password" severity="error">Passwords do not match</Message>
          <Message v-if="error" severity="error">The email is already being used</Message>
          <Message v-if="correct" severity="success">Successful registration</Message>
          <Button @click="register" label="Sign Up" style="width: 100%; border-radius: 8px; background: #4461f2" />
          <p>Sign In witch us</p>
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
import {Authentication} from "@/Services/Authentication";

export default {
  name: "sign_up",
  data(){
    return{
      authenticationService: null,
      confirmPassword: "",
      error: false,
      error_password: false,
      correct: false,
      form: {
        name: "",
        lastName: "",
        age: "",
        email: "",
        password: ""
      }
    }
  },
  methods: {
    register(){
      this.authenticationService = new Authentication();
      if(this.form.password === this.confirmPassword){
        this.authenticationService.signUpUser(JSON.stringify(this.form)).then((response) => {
          console.log(response.data);
          this.error = false;
          this.correct = true;
          setTimeout(()=>{
            //console.log("hola")
            this.$router.replace('sign-in');
          }, 2000)
        }).catch(()=>{
          this.error = true;
          this.error_password = false;
        })
      }else{
        this.error_password = true;
      }
    }
  }
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