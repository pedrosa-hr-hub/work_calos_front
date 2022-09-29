<template>
<div class="container mt-3">
  <div class="card">
    <div class="card-header card text-white bg-dark">
      <center><h4>Inserir Voto</h4></center>
    </div>
    <div class="card-body">
      <form v-on:submit.prevent="submitForm">

        <label class="mt-1" for="voto" >
          Voto:
        </label>
        <br>
        <input type="text" name="voto" v-model="form.voto" placeholder="Heineken ou Budweiser">
        <br>

        <label class="mt-1" for="email">
          E-mail:
        </label>
        <br>
        <input type="email" name="email" v-model="form.email" placeholder="exemplo@outlook.com">
        <br>

        <label class="mt-1" for="nome">
          Nome:
        </label>
        <br>
        <input type="text" name="nome" v-model="form.nome" placeholder="Insira seu nome">
        <br>

        <label class="mt-1" for="cidade">
          Cidade:
        </label>
        <br>
        <input type="text" name="cidade" v-model="form.cidade" placeholder="Insira sua cidade">
        <br>

        <label class="mt-1" for="estado">
          Estado:
        </label>
        <br>
        <input type="text" name="estado" v-model="form.estado" placeholder="Insira seu estado">
        <br>

        <button class="mt-1 btn btn-success" type="submit"> Enviar</button>

      </form>
    </div>
  </div>
</div>


</template>

<script>

import axios from 'axios';

export default {
  name: "Formulario",
  data(){
    return{
      form: {
          voto: '',
          email: '',
          nome: '',
          cidade: '',
          estado: '',
      }
    }
  },
  methods: {
    submitForm(){
      axios.post('/V1/voto', this.form)
      .then((res) =>{
        if (res.data == null) {
          console.log("VOTO FOI")
        } else {
          console.log("VOTO NÃO FUNFO")
        }
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }
}
</script>
