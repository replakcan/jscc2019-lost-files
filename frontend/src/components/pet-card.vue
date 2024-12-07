<script>
export default {
  name: "PetCard",
  props: ["pet"],
};
</script>

<template lang="pug">
article.card
  img(:src="`https://picsum.photos/300/200?random=${pet._id}`", alt="")
  h2.card-title {{ pet.breed }}
  p {{ pet.age }}
</template>

<style scoped>
.card {
  font-family: "Inter", serif;
  display: inline-block;
  text-align: left;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 20px;
  min-width: 200px;
}

.card-title {
}
</style>