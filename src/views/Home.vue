<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-lg-10 offset-lg-1">
        <div class="row">
          <Recipe class="col-12 g-4 col-lg-4" v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"></Recipe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Recipe from "@/components/Recipe.vue";
import RecipesService from "../services/RecipesService";

export default {
  name: "Home",
  components: {
    Recipe
  },
  data() {
    return {
      recipes: null
    };
  },
  created() {
    RecipesService.getRecipes()
      .then(response => {
        this.recipes = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style scoped></style>
