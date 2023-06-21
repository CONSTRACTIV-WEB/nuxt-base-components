<template>
  <component :is="tag">
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

  const { theme } = useAppConfig()
  const tc = tv(theme.heading)
</script>
