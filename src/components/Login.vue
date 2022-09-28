<template>
<div class="container mt-3">
    <div class="card">
        <div class="card-header card text-white bg-dark">
          <center><h4>Login</h4></center>
        </div>
        <div class="card-body">
          <form action="" method="post">
            <label class="mt-1" for="voto">
              Usuário:
            </label>
            <br>
            <input type="text">
            <br>
            <label class="mt-1" for="voto">
              Senha:
            </label>
            <br>
            <input type="password">
            <br>
            <button class="mt-1 btn btn-success" type="submit"> Enviar</button>
          </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "Login",
}
</script>