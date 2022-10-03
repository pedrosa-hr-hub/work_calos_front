<template>
<div class="container mt-3">
    <div class="card">
        <div class="card-header card text-white bg-dark">
          <center><h4>Login</h4></center>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="submitForm">
            <label class="mt-1" for="voto">
              Usuário:
            </label>
            <br>
            <input type="text" v-model="form.user" placeholder="Insira seu e-mail">
            <br>
            <label class="mt-1" for="voto">
              Senha:
            </label>
            <br>
            <input type="password" v-model="form.pass" placeholder="*****">
            <br>
            <button class="mt-1 btn btn-success" type="submit">Entrar</button>
          </form>
        </div>
    </div>
</div>
</template>

<script>

import router from '@/router';
import axios from 'axios';

export default {
  name: "Login",
  data(){
    return{
      form: {
          user: '',
          pass: '',
      }
    }
  },
  methods: {
    alert_sucess(response){
        alert(response);
    },
    alert_error(error){
      alert(error);
    },
    chageRoute(route){
      router.push(route);
    },
    submitForm(){
      axios.post('/V1/user', this.form)
      .then(() =>{
        this.chageRoute('/dados');
      })
      .catch((error) => {
        this.alert_error(error);
      })
    }
  }
}
</script>