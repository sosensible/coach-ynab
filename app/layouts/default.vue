<script setup lang="ts">
// Hooray! Here comes YNAB!
import * as ynab from 'ynab';

// Import our config for YNAB
import config from '~~/config.json';

</script>

<template>
  <div>
    <Nav />

    <div id="bodyContent" class="flex-grow overflow-auto">
      <slot />
    </div>

  </div>
</template>

<style>
html.cafe {
  filter: sepia(0.9) hue-rotate(315deg) brightness(0.9);
}

html.contrast {
  filter: contrast(2);
}
</style>