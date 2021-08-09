<template>
  <h2>coach details</h2>
  <router-view></router-view>
  <router-link :to="{ name: 'coaches-contact', params: { id: 'c1' } }"
    >Contact</router-link
  >
</template>