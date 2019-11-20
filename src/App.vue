<template>
  <div class="app">
    <header></header>
    <aside></aside>
    <main>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laborum impedit omnis placeat culpa corporis. Eius rem ipsa ipsum deleniti optio fugiat iure voluptatem earum adipisci eligendi atque, neque animi.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laborum impedit omnis placeat culpa corporis. Eius rem ipsa ipsum deleniti optio fugiat iure voluptatem earum adipisci eligendi atque, neque animi.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laborum impedit omnis placeat culpa corporis. Eius rem ipsa ipsum deleniti optio fugiat iure voluptatem earum adipisci eligendi atque, neque animi.</div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.app {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: repeat(3, auto);
  grid-gap: 1em;
  grid-template-areas: "header header"
                       "facets main"
                       "footer footer";
}

header {
  min-height: 50px;
  grid-area: header;
  background: #ccc;
}

aside {
  grid-area: facets;
  background: tan;
}

main {
  grid-area: main;
  background: white;
}

footer {
  min-height: 50px;
  grid-area: footer;
  background: #ccc;
}
</style>
