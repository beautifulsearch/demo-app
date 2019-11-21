<template>
  <div class="app">
    <header>
      <h1>BS</h1>
    </header>
    <aside>
      <div><input type="radio" name="size"> <label for="">&lt; 6 liters</label></div>
      <div><input type="radio" name="size"> <label for="">8 liters</label></div>
      <div><input type="radio" name="size"> <label for="">10 liters</label></div>
      <div><input type="radio" name="size"> <label for="">12 liters</label></div>
    </aside>
    <main>
      <input type="text" placeholder="Search a product">
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laborum impedit omnis placeat culpa corporis. Eius rem ipsa ipsum deleniti optio fugiat iure voluptatem earum adipisci eligendi atque, neque animi.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laborum impedit omnis placeat culpa corporis. Eius rem ipsa ipsum deleniti optio fugiat iure voluptatem earum adipisci eligendi atque, neque animi.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laborum impedit omnis placeat culpa corporis. Eius rem ipsa ipsum deleniti optio fugiat iure voluptatem earum adipisci eligendi atque, neque animi.</div>
    </main>
    <footer>
      I'm footer
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      url: null,
      core: null,
      documents: [],
      facets: [],
      query: '',
      loading: false,
    }
  },
  methods: {
    fetchFacets() {},
    fetchDocuments() {},
    queryDocuments() {},
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.app {
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
  background: #eee;
  padding: 10px;
  margin-bottom: 20px;
}

header h1 {
  line-height: 1;
  margin: 0;
  margin-top: 10px;
}

aside {
  grid-area: facets;
  padding: 20px;
  border-right: 1px solid #ddd;
}

main {
  min-height: calc(100vh - 215px);
  grid-area: main;
  background: white;
  padding: 20px;
  padding-top: 0;
}

main input {
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 30px;
  box-sizing: border-box;
}

footer {
  min-height: 50px;
  grid-area: footer;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>
