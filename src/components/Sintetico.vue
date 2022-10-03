<template>
<div class="container mt-3">
  <div class="card">
        <div class="card-header card text-white bg-dark">
          <center><h4>Dados Sintéticos</h4></center>
        </div>
        <div class="card-body">
          <div>
            <center><button @click="getVotoPercent" class="mt-1 btn btn-success"> Ver Dados</button></center>
            <br>
            <div v-for="percent in percent" :key="percent.voto">
              <h3>{{percent.voto}}</h3>
              <p>Quantidade: {{percent.qtd}}</p>
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
  name: "Sintetico",
  data(){
    return{
      percent: [],
    }
  },
  methods:{
    getVotoPercent(){
      axios.get("/V1/sintect")
      .then((response) => {
        console.log(response.data);
        this.percent = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }
}
</script>