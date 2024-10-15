<template>
   <div>Loading...</div>
</template>

<script>
export default {
   mounted() {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.replace('#', '?'));
      const token = params.get('access_token');

      if (token) {
         this.$store.dispatch('login', { token }); // Almacena el token
         this.$router.push('/'); // Redirige a la página principal
      } else {
         // Maneja el error si no hay token
         alert('Error en la autenticación');
      }
   }
};
</script>
