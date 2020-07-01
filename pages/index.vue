<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <NuxtContent :document="page" />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  async asyncData({ $content }) {
    return {
      page: await $content('pages/home').fetch()
    }
  }
}
</script>
