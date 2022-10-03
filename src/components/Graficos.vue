<template>
<div class="container mt-3">
  <div class="card">
        <div class="card-header card text-white bg-dark">
          <center><h4>Gráfico</h4></center>
        </div>
        <div class="card-body">
          <GChart
            type="ColumnChart"
            @ready="onChartReady"
          />
        </div>
    </div>
</div>
</template>

<script>
import { GChart } from 'vue-google-charts'

async function fectchData(){
  const url = 'V1/percent';
  const response = await fetch(url);

  const datapoints = await response.json();

  console.log(datapoints);
  return datapoints;
}

fectchData().then(datapoints => {
  const qtd = datapoints.Array[0].qtd.map(
    function(index){
      return index.qtd;
    })
    console.log(qtd);
})

export default {
  name: "Graficos",
  components: {
    GChart
  },
  /*methods: {
    onChartReady (chart, google) {
      const query = new google.visualization.Query('https://url-to-spreadsheet...')
      query.send(response => {
        const options = {
          // some custom options
        }
        const data = response.getDataTable()
        chart.draw(data, options)
      })
    }
  }*/
}
</script>