<template>
  <nav>
    <h1 class="nav-link">hello Kim Cường</h1>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/ProductView">Products</router-link></li>
      <li><router-link to="/AboutView">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
nav {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
nav ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  align-items: center;
  padding: 0;
}
nav ul a {
  text-decoration: none;
  color: #fff;
}
nav ul a:hover {
  color: red;
}
</style>
