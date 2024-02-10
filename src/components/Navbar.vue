<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
        <router-link to="/Login">Login</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul > li {
  display: flex;
  gap: 3rem;
}
a {
  display: block;
  color: blue;
  text-decoration: none;
}

a:hover {
  color: purple;
}
</style>
