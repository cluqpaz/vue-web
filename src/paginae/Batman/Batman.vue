<script setup lang="ts"> 
import { House } from '@lucide/vue';
import { RouterLink } from 'vue-router';
</script>

<template>
   <div class="batman">

      <RouterLink to="/">
         <House class="icon-home" />
      </RouterLink>

      <header class="titulus">
         <h1>Batman</h1>
         <div id="titulus-batman" class="titulus-img"></div>
         <p>Él puede tomar la decisión que nadie más puede, la decisión correcta.</p>
      </header>

   </div> 
</template>

<style scoped>

.batman {
   font-family:Arial, Helvetica, sans-serif
}

.icon-home {
   width: 3rem;
   height: 3rem;
   color:slateblue;
}
.icon-home:hover {
   color:white;
   background-color: slateblue;
}


.titulus-img {
  background-size: 100% 100%;
  background-position: center center; /* centrado para que tome de referencia el punto central y no la esquina 0,0 */
  background-image: url("../imagines/batman/batman.jpg"); /* los dos puntos son importantes para cuando se comprima en un archivo css */
  min-height: 100vh; /* cuanto ocupa de la ventana */
}

.titulus-img:hover {
  background-size: 115% 115%;
}

.titulus > h1 {
  position: absolute; /* absolute para que no sea relativo al resto de elementos de la página */
  top: 63%; /* distancia del top de la pagina */
  width: 100%; /* ocupa en 100% de la ventana */
  text-align: center;
  font-size: 5rem; 
  color: white;
  pointer-events:none; /* que no cuente el hover suyo y no interfiera con el hover que tenemos puesto al fondo */
  font-family: batman;
}

.titulus > p {
  position: absolute;
  top: 36%;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: white;
  pointer-events:none;
  font-family: batman;
  display: none;
}

@media (min-width: 768px) {
   .titulus>p {
      display: block;
   }
}

</style>