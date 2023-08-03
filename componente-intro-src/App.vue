<template>
  <div id="app">
    <h1>Contadores</h1>
    <!--Aqui vamos chamar a referencia que foi criada no arquivo main.js-->
    <app-contador />
  </div>
</template>

<script>
export default {
  //criando metodo data - a propriedade data dentro de um 
  //componente Vue precisa ser uma função
  data() {
    return {
      contador: 0
    }
  }
}
</script>

<style>

</style>
