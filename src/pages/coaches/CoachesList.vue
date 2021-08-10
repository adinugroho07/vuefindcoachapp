<template>
  <section>
    <coach-filter @change-filter="setFilters"> </coach-filter>
  </section>
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
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  computed: {
    coach() {
      const coach = this.$store.getters['coachstate/getListCoach'];
      return coach.filter(ch => {
        if (this.activeFilters.frontend && ch.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && ch.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && ch.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCoach() {
      return this.$store.getters['coachstate/hasCoaches'];
    }
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    }
  }
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
