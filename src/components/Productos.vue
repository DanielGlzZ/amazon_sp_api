<template>
   <div>
      <h1>SandBox Amazon SP API</h1>
   </div>
</template>

<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const clientId = ref(process.env.VUE_APP_CLIENT_ID); 
const clientSecret = ref(process.env.VUE_APP_SECRET_KEY);
const refreshToken = ref(process.env.VUE_APP_REFRESH_TOKEN);
const redirectUri = 'https://amazon-sp-api-sand.vercel.app/productos';

const authAmazon = async () => {
   const params = new URLSearchParams();
   params.append('grant_type', 'refresh_token'); 
   params.append('client_id', clientId.value); 
   params.append('client_secret', clientSecret.value); 
   params.append('refresh_token', refreshToken.value);

   try {
      const response = await axios.post('https://api.amazon.com/auth/o2/token', params.toString(), {
         headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
         }
      });
      console.log(response.data); 
   } catch (error) {
      console.error('Error al obtener las credenciales:', error);
   }
};

onMounted(async () => {
   //await fetchCredentials();
   await authAmazon();
   let code;  // Captura el código de la URL
   if (route.query.code) {
      code = route.query.code;
      console.log('Código recibido:', code);
      exchangeCodeForToken(code);
   } else {
      console.log('No se recibió un código.');
   }
});

const exchangeCodeForToken = async (authCode) => {
   const tokenUrl = 'https://api.amazon.com/auth/o2/token';

   const data = new URLSearchParams();
   data.append('grant_type', 'authorization_code');
   data.append('code', authCode);
   data.append('client_id', clientId.value);
   data.append('client_secret', clientSecret.value);
   data.append('redirect_uri', redirectUri);

   try {
      const response = await axios.post(tokenUrl, data);
      const { access_token, refresh_token } = response.data;
      sessionStorage.setItem("access_token", access_token);
      sessionStorage.setItem("refresh_token", refresh_token);
   } catch (error) {
      console.error('Error obteniendo tokens:', error);
   }
};
</script>

<style scoped lang="scss">
.button-8 {
   background-color: #e1ecf4;
   border-radius: 3px;
   border: 1px solid #7aa7c7;
   box-shadow: rgba(255, 255, 255, 0.7) 0 1px 0 0 inset;
   box-sizing: border-box;
   color: #39739d;
   cursor: pointer;
   display: inline-block;
   font-family: -apple-system, system-ui, 'Segoe UI', 'Liberation Sans', sans-serif;
   font-size: 13px;
   font-weight: 400;
   line-height: 1.15385;
   margin: 0;
   outline: none;
   padding: 8px 0.8em;
   position: relative;
   text-align: center;
   text-decoration: none;
   user-select: none;
   -webkit-user-select: none;
   touch-action: manipulation;
   vertical-align: baseline;
   white-space: nowrap;
}

.button-8:hover,
.button-8:focus {
   background-color: #b3d3ea;
   color: #2c5777;
}

.button-8:focus {
   box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
}

.button-8:active {
   background-color: #a0c7e4;
   box-shadow: none;
   color: #2c5777;
}
</style>
