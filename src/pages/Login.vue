<template>
  <base-card>
    <form @submit.prevent="login">
      <div class="form-control" :class="{ errors: !isSubmitValid }">
        <label for="username">Your Username</label>
        <input type="text" id="username" v-model.trim="username" />
      </div>
      <div class="form-control" :class="{ errors: !isSubmitValid }">
        <label for="password">Your Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <p v-if="!isSubmitValid" :class="{ errors: !isSubmitValid }">
        {{ errorMessage }}
      </p>
      <div class="actions">
        <base-button>Submit</base-button>
      </div>
    </form>
  </base-card>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      isSubmitValid: true,
      errorMessage: '',
    };
  },
  methods: {
    login() {
      this.isSubmitValid = true;
      if (this.username === '' || this.password === '') {
        this.isSubmitValid = false;
        this.errorMessage = 'Do Not Empty Username Or Password !!';
        return;
      }

      const usertemp = this.$store.getters['coachstate/getListCoach'].find(
        (el) => el.username === this.username && el.password === this.password
      );
      if (!usertemp || typeof usertemp === 'undefined') {
        this.isSubmitValid = false;
        this.errorMessage = 'Please input a valid email and password.';
        return;
      }

      this.$store.dispatch('actionsLogin', { id: usertemp.id });
      this.$router.replace('/coaches');
    },
  },
};
</script>
<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>