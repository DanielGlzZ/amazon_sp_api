<template>
   <div class="container">
      <div class="align-column">
         <form @submit.prevent="AutorizarAmazon" class="align-column-div">
            <h1>Ingresar con Amazon</h1>
            <button type="submit" class="button-7">Autorizar</button>
         </form>
      </div>
   </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const AutorizarAmazon = () => {
   router.push('/productos');
};
</script>

<style scoped lang="scss">
.container {
   display: flex;
   align-items: center;
   justify-content: center;
}
.align-column {
   display: flex;
   flex-direction: column;
   background: rgba(255, 255, 255, 0.52);
   border-radius: 16px;
   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
   backdrop-filter: blur(9.4px);
   -webkit-backdrop-filter: blur(9.4px);
   border: 1px solid rgba(255, 255, 255, 0.3);
   padding: 50px 20px;
}
.align-column-div {
   display: flex;
   flex-direction: column;
   background: transparent;
   border-radius: 16px;
   padding: 50px 20px;
}
:root {
   --input-color: #99a3ba;
   --input-border: #cdd9ed;
   --input-background: #fff;
   --input-placeholder: #cbd1dc;

   --input-border-focus: #275efe;

   --group-color: #99a3ba;
   --group-border: #cdd9ed;
   --group-background: #eef4ff;

   --group-color-focus: #fff;
   --group-border-focus: #275efe;
   --group-background-focus: #678efe;
}

.form-field {
   display: block;
   width: 100%;
   padding: 8px 16px;
   line-height: 25px;
   font-size: 14px;
   font-weight: 500;
   font-family: inherit;
   border-radius: 6px;
   -webkit-appearance: none;
   color: #99a3ba;
   border: 1px solid #cdd9ed;
   background: #fff;
   transition: border 0.3s ease;
   &::placeholder {
      color: #cbd1dc;
   }
   &:focus {
      outline: none;
      border-color: #275efe;
   }
}

.form-group {
   position: relative;
   display: flex;
   width: 100%;
   & > span,
   .form-field {
      white-space: nowrap;
      display: block;
      &:not(:first-child):not(:last-child) {
         border-radius: 0;
      }
      &:first-child {
         border-radius: 6px 0 0 6px;
      }
      &:last-child {
         border-radius: 0 6px 6px 0;
      }
      &:not(:first-child) {
         margin-left: -1px;
      }
   }
   .form-field {
      position: relative;
      z-index: 1;
      flex: 1 1 auto;
      width: 1%;
      margin-top: 0;
      margin-bottom: 0;
   }
   & > span {
      text-align: center;
      padding: 8px 12px;
      font-size: 14px;
      line-height: 25px;
      color: #fff;
      background: #eef4ff;
      border: 1px solid #cdd9ed;
      transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
   }
   &:focus-within {
      & > span {
         color: #fff;
         background: #678efe;
         border-color: #275efe;
      }
   }
}

.button-7 {
   background-color: #0095ff;
   border: 1px solid transparent;
   border-radius: 3px;
   box-shadow: rgba(255, 255, 255, 0.4) 0 1px 0 0 inset;
   box-sizing: border-box;
   color: #fff;
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

.button-7:hover,
.button-7:focus {
   background-color: #07c;
}

.button-7:focus {
   box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);
}

.button-7:active {
   background-color: #0064bd;
   box-shadow: none;
}
</style>
