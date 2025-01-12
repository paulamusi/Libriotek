<script setup lang="ts">
import { ref, onMounted } from 'vue';
import GlobalCardBook from '../GlobalCardBook.vue';

interface Libro {
  titulo: string;
  autor: string;
  imagen: string;
}

const librosSeleccionados = [
  { titulo: "Moby Dick", autor: "Herman Melville" },
  { titulo: "1984", autor: "George Orwell" },
  { titulo: "Monster and Chips", autor: "David O'connell" },
  { titulo: "Labyrinths", autor: "Jorge Luis Borges" },
  { titulo: "Fahrenheit 451", autor: "Ray Bradbury" },
  { titulo: "The alchemist", autor: "Paulo Coelho" }
];

const libros = ref<Libro[]>([]);
const isLoading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const fetchLibroData = async (libroSeleccionado: { titulo: string; autor: string }): Promise<Libro | null> => {
      const query = `title=${encodeURIComponent(libroSeleccionado.titulo)}&author=${encodeURIComponent(libroSeleccionado.autor)}`;
      const apiUrl = `https://openlibrary.org/search.json?${query}`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      const libroEncontrado = data.docs.find(
        (doc: any) =>
          doc.title.toLowerCase() === libroSeleccionado.titulo.toLowerCase() &&
          doc.author_name?.some((autor: string) => autor.toLowerCase() === libroSeleccionado.autor.toLowerCase())
      );

      if (libroEncontrado) {
        return {
          titulo: libroEncontrado.title,
          autor: libroEncontrado.author_name[0] || 'Autor desconocido',
          imagen: libroEncontrado.cover_i
            ? `https://covers.openlibrary.org/b/id/${libroEncontrado.cover_i}-L.jpg`
            : 'https://via.placeholder.com/128x192?text=Sin+Imagen',
        };
      }

      return null;
    };

    const resultados = await Promise.all(
      librosSeleccionados.map(libroSeleccionado => fetchLibroData(libroSeleccionado))
    );

    libros.value = resultados.filter((libro): libro is Libro => libro !== null);
  } catch (err) {
    error.value = 'Hubo un error al cargar los datos';
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div>
    <div v-if="isLoading">Cargando libros...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="flex flex-wrap">
      <GlobalCardBook 
        v-for="libro in libros"
        :key="libro.titulo"
        :titulo="libro.titulo"
        :autor="libro.autor"
        :imagen="libro.imagen"
      />
    </div>
  </div>
</template>
