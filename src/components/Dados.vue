<template>
<div class="container mt-3">
  <div class="card">
        <div class="card-header card text-white bg-dark">
          <center><h4>Dados</h4></center>
        </div>
        <div class="card-body">
          <div>
            <center><button @click="getVoto" class="mt-1 btn btn-success"> Ver Dados</button></center>
            <br>
            <div v-for="voto in voto" :key="voto.id">
              <h3>{{voto.id}}.{{voto.voto}}</h3>
              <p>Nome: {{voto.nome}}</p>
              <p>E-mail: {{voto.email}}</p>
              <p>Cidade: {{voto.cidade}}</p>
              <p>Estado: {{voto.estado}}</p>
              <br>
            </div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Dados",
  data(){
    return{
      voto: [],
    }
  },
  methods:{
    getVoto(){
      axios.get("/V1/consulta")
      .then((response) => {
        console.log(response.data);
        this.voto = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }
}
</script>