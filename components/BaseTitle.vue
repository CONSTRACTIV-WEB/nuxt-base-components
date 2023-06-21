<template>
  <component :is="tag" :class="button({ color: primary })">
    <slot />
  </component>
</template>
<script setup>
  import { tv } from 'tailwind-variants'

  const props = defineProps({
    tag: {
      type: String,
      default: 'h2',
    }
  })

  const button = tv({
  base: "font-semibold text-white text-sm py-1 px-4 rounded-full active:opacity-80",
  variants: {
    color: {
      primary: "bg-blue-500 hover:bg-blue-700",
      secondary: "bg-purple-500 hover:bg-purple-700",
      success: "bg-green-500 hover:bg-green-700",
    },
  },
});

</script>
