<script setup lang="ts">
const handleSubmit = (event: Event) => {
  event.preventDefault();
  console.log("Formulario enviado");
};
</script>
<template>
    <div class="bg-gradient-to-r from-[#06594E] via-[#097770] to-[#A9C0A6] h-[40vh] flex justify-around items-center">
      <!-- Placeholder -->
      <div class="h-[200px] w-[200px] bg-tannen"></div>
      
      <!-- Formulario -->
      <div class="w-[300px]">
        <h2 class="text-2xl font-bold mb-6 text-senf text-center">Login</h2>
        <form @submit="handleSubmit" class="space-y-4">
          <div>
            <label for="email" class="block text-senf font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06594E] focus:border-transparent"
            />
          </div>
          <div>
            <label for="password" class="block text-senf font-medium mb-2">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06594E] focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            class="w-full bg-[#06594E] text-senf py-3 rounded-lg font-medium hover:bg-[#097770] transition-colors"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  </template>