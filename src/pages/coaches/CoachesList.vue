<template>
  <section>Filter</section>
  <base-card>
    <section>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button :link="true" to="register">Register</base-button>
      </div>
      <ul v-if="hasCoach">
        <coach-item
          v-for="item in coach"
          :key="item.id"
          :id="item.id"
          :firstname="item.firstName"
          :lastname="item.lastName"
          :rate="item.hourlyRate"
          :areas="item.areas"
        ></coach-item>
      </ul>
      <h3 v-else>No Coaches Found.</h3>
    </section>
  </base-card>
</template>
<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components: {
    CoachItem,
  },
  computed: {
    coach() {
      return this.$store.getters['coachstate/getListCoach'];
    },
    hasCoach() {
      return this.$store.getters['coachstate/hasCoaches'];
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>