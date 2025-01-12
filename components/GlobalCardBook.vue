<script setup lang="ts">
defineProps({
  titulo: String,
  autor: String,
  imagen: String,
});
</script>
<template>
    <div class="p-4 m-2 shadow  border border-hellTannen rounded min-w-[280px] font-montserrat flex flex-col gap-2 max-w-[300px]">
        <img :src="imagen" alt="book cover" class="object-contain  h-52"/>
       <p>{{ titulo }}</p>
       <p>{{ autor }}</p>
       <button class="bg-hellTannen text-center w-full rounded text-darkTannen">view details</button>
    </div>
</template>