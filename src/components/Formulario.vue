<template>
<div class="container mt-3">
  <div class="card">
    <div class="card-header card text-white bg-dark">
      <center><h4>Inserir Voto</h4></center>
    </div>
    <div class="card-body">
      <form action="" method="post">

      <label class="mt-1" for="voto">
        Voto:
      </label>

      <br>
      <input type="text">
      <br>

      <label class="mt-1" for="voto">
        E-mail:
      </label>
      <br>
      <input type="email">
      <br>

      <label class="mt-1" for="voto">
        Nome:
      </label>
      <br>
      <input type="text">
      <br>

      <label class="mt-1" for="voto">
        Cidade:
      </label>
      <br>
      <input type="text">
      <br>

      <label class="mt-1" for="voto">
        Estado:
      </label>
      <br>
      <input type="text">
      <br>

      <button class="mt-1 btn btn-success" type="submit"> Enviar</button>
      </form>
    </div>
  </div>
</div>


</template>

<script>
export default {
  name: "Formulario",
}
</script>
