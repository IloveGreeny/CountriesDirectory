<script setup>
import { RouterView } from 'vue-router'
import CountryView from "./views/CountryView/CountryView.vue";
import SearchBarView from "./views/SearchBarvView/SearchBarView.vue";
</script>

<template>
  <header>
    <div>
      <SearchBarView/>
      <CountryView/>
    </div>
  </header>

 <RouterView />
</template>

<style scoped>

</style>
