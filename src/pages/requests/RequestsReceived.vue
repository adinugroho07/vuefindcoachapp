<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <ul v-if="hasRequestComp">
        <requests-item
          v-for="item in getReceivedRequests"
          :key="item.id"
          :email="item.userEmail"
          :message="item.message"
        >
        </requests-item>
      </ul>
      <h3 v-else>You Haven't received any requests yet !</h3>
    </base-card>
  </section>
</template>
<script>
import RequestsItem from '../../components/requests/RequestsItem.vue';

export default {
  components: {
    RequestsItem,
  },
  computed: {
    getReceivedRequests() {
      return this.$store.getters['requestsstate/getDataReceived'].filter(
        (el) => (el.coachId = this.$store.getters['getLoginId'])
      );
    },
    hasRequestComp() {
      return this.$store.getters['requestsstate/hasRequests'];
    },
  },
};
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>