<script>
// @ is an alias to /src
import PetCard from "@/components/pet-card.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "HomeView",
  components: {
    PetCard,
  },
  computed: {
    ...mapState(["pets", "counter"]),
    /* 
      or you can type this:
      ...mapState({
      counter: (state) => state.counter,
    }),
    */
  },
  methods: {
    ...mapActions(["fetchPets", "incrementCounter"]),
    /* 
      or you can type this:
      ...mapActions({
      incrementCounter: "incrementCounter",
    }),
    */
  },
  created() {
    this.fetchPets();
  },
};
</script>

<template lang="pug">
main
  section
    button.increment-button(@click="incrementCounter") Increment {{ counter }}
  section
    pet-card(v-for="pet in pets", :pet="pet")
</template> 

<style scoped>
section {
  padding: 40px 0;
}
.increment-button {
  color: darkcyan;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid darkcyan;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
}

.increment-button:hover {
  color: white;
  background-color: darkcyan;
}
</style>