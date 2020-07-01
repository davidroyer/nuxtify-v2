<template>
  <v-layout>
    <v-flex class="">
      <h1>Blog</h1>

      <ul>
        <li v-for="article in articles" :key="article.path">
          <nuxt-link :to="`/blog/${article.slug}`">
            {{ article.title }}
          </nuxt-link>
        </li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script>
// <pre>{{ articles }}</pre>

export default {
  async asyncData({ $content }) {
    const articles = await $content('articles').fetch()

    return {
      articles
    }
  }
}
</script>

<style></style>
