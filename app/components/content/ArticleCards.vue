<script lang="ts" setup>
const props = defineProps<{
  articles: Array<{
    id: number;
    title: string;
    slug: string;
    description: string;
    imageUrl: string;
    categories: string;
    timeAgo: string;
  }>;
}>();

const articles = props.articles;
</script>

<template>

  <div class="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg"
    v-for="article in articles" key="article.id">
    <div class="py-4 px-8">
      <a href="#">
        <h4 class="text-lg mb-3 font-semibold">{{ article.title }}</h4>
      </a>
      <img class="w-full" :src="article.image" alt="To be added to data">
      <p class="mb-2 text-sm text-gray-600">{{ article.description }}</p>
      <img src="https://tailwindcss.com/img/jonathan.jpg" class="rounded-full h-12 w-12 mb-4">

      <hr class="mt-4">
      <span class="btn text-sm">{{ article.categories[0] }}</span>
    </div>
  </div>

</template>
