<template>
  <div class="movie-page">
    <div class="movie-filter q-ml-md q-mr-xl">
      <MovieFilter @categoriaCambiada="actualizarCategoria" />
    </div>
    <div class="product-list q-mr-md">
      <MovieList :categoriaFiltrada="categoriaSeleccionada" />
    </div>
  </div>
</template>

<style>
.movie-page {
  display: flex;
  justify-content: space-between;
}

.product-filter {
  width: 25%;
}

.product-list {
  width: 75%;
}
</style>

<script>
import MovieFilter from "src/components/Movie/MovieFilter.vue";
import MovieList from "src/components/Movie/MovieList.vue";

export default {
  name: "MoviePage",
  components: { MovieFilter, MovieList },
  data() {
    return {
      categoriaSeleccionada: null,
    };
  },
  methods: {
    actualizarCategoria(categoria) {
      console.log("La categoria recibida es: " + categoria);
      this.categoriaSeleccionada = categoria;
    },
  },
};
</script>
