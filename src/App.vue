<template>
  <Formulario/>
  <Login/>
  <Graficos/>
  <Dados/>
</template>

<script>
import Formulario from './components/Formulario.vue'
import Login from './components/Login.vue'
import Graficos from './components/Graficos.vue'
import Dados from './components/Dados.vue'

export default {
  name: 'App',
  components: {
    Formulario,
    Login,
    Graficos,
    Dados,
}
}
</script>