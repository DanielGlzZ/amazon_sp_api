<template>
   <div id="app">
      <router-view></router-view>
      <!-- Este componente renderizará Login o Productos -->
   </div>
</template>

<script>
export default {
   name: 'App'
};
</script>

<style>
body {
   background-color: #aed6f1;
}
</style>
