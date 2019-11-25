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
      <input type="text" v-model="query" @input="searchQueryThrottled" placeholder="Search a product">
      <div class="result-container">
        <div v-for="( doc, index) in documents" :key="index">
          <div class="search-result__card">
            <div class="result-image__container">
              <img class="result-card__image" :src="doc.image">
            </div>
            <div class="card-name__container">
              <p class="result-card__name">{{ doc.name }}</p>
              <div class="result-card__description">{{ doc.longDescription }}</div>
              <div class="result-card__rating">
                Customer Rating :
                <span class="customer-rating__card">{{ doc.customerReviewAverage || "NA"}}</span>
              </div>
              <div class="result-card__price">{{ doc.salePrice }}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      I'm footer
    </footer>
  </div>
</template>

<script>
import Solr from 'solr-admin-client';
import throttle from "lodash/throttle";

export default {
  name: 'app',
  data() {
    return {
      url: 'http://solr:5d7XQ4Lim7PTAaqJVf9@45.79.112.40',
      core: 'demo_computers',
      documents: [],
      facets: [],
      query: '',
      loading: false,
    }
  },
  methods: {
    fetchFacets() {},
    fetchDocuments() {},
    searchQueryThrottled: throttle(function() {
      this.queryDocuments();
    }, 1500),
    async queryDocuments() {
      const solr = new Solr(this.url, this.core);
      const response = await solr.query(this.query);
      this.documents = response.data.response.docs;
    },
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: var(--calibre);
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

.result-container {
  display: flex;
  flex-wrap: wrap;
}

.search-result__card {
  display: flex;
  max-width: 475px;
  max-height: 200px;
  border: var(--border-1) solid var(--grey-light);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-primary);
  margin-bottom: var(--spacing-2);
  margin-right: var(--spacing-3);
}

.search-result__card:hover {
  cursor: pointer;
  transform: scale(0.9);
}

.result-image__container {
  width: 150px;
  height: 200px;
}

.result-card__image {
  height: 100%;
  width: 100%;
  object-fit: contain;
  margin: 0 var(--spacing-1);
}

.card-name__container {
  padding: var(--spacing-4) var(--spacing-3);
  margin-left: var(--spacing-2);
}

.result-card__name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
  font-weight: 700;
}

.result-card__description {
  display: block; /* Fallback for non-webkit */
  display: -webkit-box;
  max-width: 400px;
  height: var(--sm)*1.4*3; /* Fallback for non-webkit */
  margin: 0 auto;
  font-size: var(--sm);
  line-height: 1.4;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.result-card__rating {
  margin-top: var(--spacing-2);
  font-size: var(--sm);
}

.customer-rating__card {
  font-weight: 700;
}

.result-card__price {
  margin-top: var(--spacing-2);
  font-weight: 500;
}
</style>
