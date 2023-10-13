<template>
  <div class="container">
    <div   v-for="data in apiData" :key="data.id">
      <h1>{{data.name.common}}</h1>
      <img width="100" :alt="data.flags.alt" :src="data.flags.png"/>
      <h3> Capital {{data.capital.toString()}}</h3>
      <p>In the Region of {{data.region}}</p>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  name: "Country",
  data() {
    return {
      apiData : []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
  async  fetchData() { //
    try {
      const response = await axios.get(' https://restcountries.com/v3.1/all?fields=name,flags,capital,currencies,region');
      this.apiData = response.data.slice(0,10);
    } catch (e) {
      console.log(e);
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