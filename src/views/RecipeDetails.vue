<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="col-10 offset-1 col-lg-6 offset-lg-3 text-center">{{ recipe.name }}</h1>
    </div>
    <div class="row">
      <img class="col-12 col-lg-8 offset-lg-2 img-fluid mx-auto" v-bind:src="recipe.image" v-bind:alt="recipe.name"/>
    </div>
    <div class="row">
      <div class="col-10 offset-1 col-lg-8 offset-lg-2">
        <h2>Description:</h2>
        <p>{{ recipe.description }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1 col-lg-8 offset-lg-2">
        <h2>Ingredients:</h2>
        <p>{{ recipe.ingredients }}</p>
        <!--<ul>
          <li v-for="ingredient in recipe.ingredients">{{ ingredient }}</li>
        </ul>-->
      </div>
    </div>
  </div>
</template>

<script>
import RecipesService from "@/services/RecipesService";

export default {
  props: ["id"],
  data() {
    return {
      recipe: null
    };
  },
  created() {
    RecipesService.getRecipe(this.id)
        .then(response => {
          this.recipe = response.data;
        })
        .catch(error => {
          console.log(error);
        });
  }
};
</script>

<style scoped></style>
