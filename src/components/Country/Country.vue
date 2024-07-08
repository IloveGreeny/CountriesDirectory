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
  async  fetchData() {
    try {
      const response = await axios.get(' https://restcountries.com/v3.1/all?fields=name,flags,capital,currencies,region');
      this.apiData = response.data.slice(0,12);
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
  justify-content: center;
}

.container > div {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 250px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.container > div:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

h1 {
  margin-top: 0;
}

img {
  margin: 20px 0;
}

h3 {
  font-weight: normal;
  color: #666;
}
</style>
