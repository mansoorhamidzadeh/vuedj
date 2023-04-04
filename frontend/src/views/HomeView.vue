<template>
  <div class="HomeView">
    <h1>Home</h1>
    <article v-for="article in articles">
      <h3>
        <router-link :to="`/article/${article.slug}`">{{ article.title }}</router-link>
      </h3>
      <div>{{ article.description }}
        <router-link :to="`/article/${article.slug}`">+ more</router-link>
      </div>

    </article>

  </div>
</template>

<script lang="ts">

export default ({
  name: 'HomeView',
  data() {

     let articles = JSON.parse(localStorage.getItem("articles")||'{}')
    console.log(articles)
    return {
      articles:articles
    }
  }
});
</script>
