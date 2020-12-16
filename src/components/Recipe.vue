<template>
  <router-link class="text-decoration-none" :to="{ name: 'RecipeDetails', params: { id: recipe.id } }">
    <div class="card">
      <img v-bind:src="recipe.image" v-bind:alt="recipe.name" />
      <div class="card-body">
        <h5 class="card-title">{{ recipe.name }}</h5>
        <p class="card-text">{{ recipe.description }}</p>
        <a href="#" class="btn btn-secondary">Show recipe</a>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Recipe",
  props: {
    recipe: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5,
p,
a {
  font-family: Arial, serif;
  color: black;
}
h5 {
  font-size: 1.5rem;
}

p,
a {
  font-size: 1.2rem;
}
</style>
