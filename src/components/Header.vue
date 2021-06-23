<template>
  <header class="header">
      <h1 class="text-center">Desenvolvimento de um dashboard como processo seletivo para vaga pj</h1>
  </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
@media only screen and (max-width: 575px) {
    @media only screen and (orientation: portrait) {    
        header.header {
            height: 100px;
        }
    }
}
@media only screen and (min-width: 576px) {
    @media only screen and (orientation: landscape) {
        header.header {
            height: 80px;
        }
    }
}
@media only screen and (min-width: 768px) {
    @media only screen and (orientation: portrait) {
        header.header {
            height: 90px;
        }
    }
}
header.header {
    background-color: black;
}

header.header h1 {
    color: white;
}
</style>