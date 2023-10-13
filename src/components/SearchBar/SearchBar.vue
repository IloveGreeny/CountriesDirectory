<template>
  <div>
    <input  type="text" placeholder="Country Name" v-model="searchQuery"/>
    <button @click="searchData">Search</button>
    <div class="container">
      <div   v-for="data in apiData" :key="data.id">
        <h1>{{data.name.common}}</h1>
        <img width="100" :alt="data.flags.alt" :src="data.flags.png"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import axios from "axios";
export default {
  name: "SearchBar",
  data() {
    return{
      searchQuery : ref(),
      apiData: []
    };
  },
  methods: {
    async searchData() {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${this.searchQuery}`);
        this.apiData = response.data;
      }catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

.container {
  display: flex;
  flex-wrap: wrap;
}
</style>