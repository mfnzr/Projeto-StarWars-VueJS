<template>
  <div class="img-container">
    <img src="../assets/img/star-wars-logo.png" alt="Star Wars Logo">
    <h1 class="api">APi</h1>
    <h2 class="api-by">By Maria Fernanda Ribeiro</h2>
  </div>
</template>

<script scoped>
  export default {
    name: "Home",
  }
</script>

<style>
  .img-container {
    text-align: center;
    position: relative;
  }
  
  img {
    width: 30%;
  }

  .api {
    font-family: star-wars-transparent;
    color: #FFC107;
    text-align: center;
    margin-bottom: 50px;
    font-size: 100px;
    margin-top: -110px;
  }

  .api-by {
    font-family: star-wars-transparent;
    color: #FFC107;
    text-align: center;
    margin-top: 7vw;
    font-size: 30px
  }
</style>