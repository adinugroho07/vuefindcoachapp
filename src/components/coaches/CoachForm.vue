<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstname.isvalid }">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstname.val" />
      <p v-if="!firstname.isvalid">Firstname Is Not Be Empty !!</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastname.isvalid }">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model.trim="lastname.val" />
      <p v-if="!lastname.isvalid">Lastname Is Not Be Empty !!</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isvalid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        name=""
        cols="30"
        rows="5"
        v-model.trim="description.val"
      ></textarea>
      <p v-if="!description.isvalid">Description Is Not Be Empty !!</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isvalid }">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate.val" />
      <p v-if="!rate.isvalid">Hourly Rate Is Must Greater Than 0 !!</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.isvalid }">
      <h3>Area Of Expertise</h3>
      <div>
        <input
          type="checkbox"
          value="frontend"
          id="frontend"
          v-model="areas.val"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="backend"
          id="backend"
          v-model="areas.val"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input type="checkbox" value="career" id="career" v-model="areas.val" />
        <label for="career">Career Development</label>
      </div>
      <p v-if="!areas.isvalid">
        Must Select At Least One Of Areas Of Expertise!!
      </p>
    </div>
    <p v-if="!isValidFormInput">Please Fix The Error And Submit Again!!</p>
    <base-button>Register</base-button>
  </form>
</template>
<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstname: {
        val: '',
        isvalid: true,
      },
      lastname: {
        val: '',
        isvalid: true,
      },
      description: {
        val: '',
        isvalid: true,
      },
      rate: {
        val: null,
        isvalid: true,
      },
      areas: {
        val: [],
        isvalid: true,
      },
      isValidFormInput: true,
    };
  },
  methods: {
    validateForm() {
      this.isValidFormInput = true;
      if (this.firstname.val === '') {
        this.firstname.isvalid = false;
        this.isValidFormInput = false;
      } else {
        this.firstname.isvalid = true;
      }
      if (this.lastname.val === '') {
        this.lastname.isvalid = false;
        this.isValidFormInput = false;
      } else {
        this.lastname.isvalid = true;
      }
      if (this.description.val === '') {
        this.description.isvalid = false;
        this.isValidFormInput = false;
      } else {
        this.description.isvalid = true;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isvalid = false;
        this.isValidFormInput = false;
      } else {
        this.rate.isvalid = true;
      }
      if (this.areas.val.length === 0) {
        this.areas.isvalid = false;
        this.isValidFormInput = false;
      } else {
        this.areas.isvalid = true;
      }
      if (
        this.firstname.isvalid &&
        this.lastname.isvalid &&
        this.description.isvalid &&
        this.rate.isvalid &&
        this.areas.isvalid
      ) {
        this.isValidFormInput = true;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.isValidFormInput) {
        return;
      }

      const formData = {
        firstname: this.firstname.val,
        lastname: this.lastname.val,
        description: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
        username: this.firstname.val.toLowerCase,
        password: '123123',
      };
      this.$emit('save-data', formData);
    },
  },
};
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
