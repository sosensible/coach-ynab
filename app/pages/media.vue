<script setup lang="ts">
import { useMediaStore } from '~/store/media';

const mediaResources = useMediaStore();
const media = mediaResources.resources;

</script>

<template>
  <BlockGrid>

    <BlockGridHeader title="Church Media" />

    <BlockGridBody>

      <MediaCards :media="media" />

    </BlockGridBody>

  </BlockGrid>
</template>