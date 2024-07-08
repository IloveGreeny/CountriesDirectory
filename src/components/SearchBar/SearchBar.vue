<template>
  <div>
    <input  type="text" placeholder="Country Name" v-model="searchQuery"/>
    <button @click="searchData">Search</button>
    <div class="container">
      <div v-for="data in apiData" :key="data.id" class="country-card">
        <h1>{{data.name.common}}</h1>
        <h3 class="country-capital"> Capital {{data.capital.toString()}}</h3>
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
        const response = await axios.get(`https://restcountries.com/v3.1/name/${this.searchQuery.toLowerCase()}`);
        this.apiData = response.data;
      }catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

input[type="text"] {
  margin-left: 70px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
}

input[type="text"]:focus {
  border-color: #aaa;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

button {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #3e8e41;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.country-card {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 250px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

.country-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
}

.country-card h1 {
  margin-top: 0;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.country-card img {
  margin: 20px 0;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.country-card h3 {
  font-weight: normal;
  color: #666;
  font-size: 18px;
}

.country-card h3 span {
  font-weight: bold;
  color: #333;
}

.country-capital {
  display: flex;
  align-items: center;
}
</style>
