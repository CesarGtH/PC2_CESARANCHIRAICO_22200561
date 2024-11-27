<template>
  <h5>Listado de Películas</h5>
  <div class="movie-list">
    <div class="movie-grid">
      <div
        class="movie-card"
        v-for="item in filtrarMoviePorCategoria"
        :key="item.id"
      >
        <MovieCard :movie="item" />
      </div>
    </div>
  </div>
</template>

<style>
.movie-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
</style>

<script>
import MovieCard from "src/components/Movie/MovieCard.vue";

export default {
  name: "MovieList",
  components: { MovieCard },
  computed: {
    filtrarMoviePorCategoria() {
      return this.movie.filter(
        (movie) => movie.category.id === this.categoriaFiltrada
      );
    },
  },
  props: {
    categoriaFiltrada: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      movies: [],
    };
  },
  mounted() {
    this.cargarMovies();
  },
  methods: {
    cargarMovies() {
      let endpointURL = "/api/product";
      let token = JSON.parse(localStorage.getItem("userData")).data.token;
      let headers = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      this.$api
        .get(endpointURL, headers)
        .then((response) => {
          console.log(JSON.stringify(response));
          this.products = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
