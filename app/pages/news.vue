<script setup lang="ts">
import { useNewsStore } from '~/store/news';

const newsStore = useNewsStore();
const articles = newsStore.articles;

</script>

<template>
  <BlockGrid>

    <BlockGridHeader title="Church News" />

    <BlockGridBody>

      <ArticleCards :articles="articles" />

    </BlockGridBody>

  </BlockGrid>
</template>